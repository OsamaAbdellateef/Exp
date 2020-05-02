import React from 'react';
import './App.css';
import { Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth , createUserProfileDocument} from './../src/firebase/firebase.utils';
import CustomButton from './components/custom-button/custom-button.component';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUserState: null,
      userEmail:''
    }

  }


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      
      this.setState({ currentUserState: userAuth
      });
      createUserProfileDocument(userAuth);
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUserState={this.state.currentUserState} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>

        
      </div>
    );
  }
}

export default App;
