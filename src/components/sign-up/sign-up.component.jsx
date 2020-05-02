import React from 'react';
import './sign-up.style.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName , email , password , confirmPassword } = this.state;

        if(password != confirmPassword) {
            alert('passwords do not match ');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email , password);
            await createUserProfileDocument(user , { displayName });
            
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });

        } catch(error) {
            console.log('errrrrrrrrrrrrrrrrrroooooooor')
        }
    } 

    handleChange = event => {
        const { name , value } = event.target;
        this.setState({
            [name]:value
        } , () => {console.log(value);
        })
    
    }
    


    render() {
        const { displayName , email , password , confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h4 className="mb-4 text-capitalize">i do not have an account</h4>
                <span>Sign up with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} label="displayName" required />

                    <FormInput 
                    type="email" name="email"
                    label="email" required  onChange={this.handleChange} value={this.state.email} />

                    <FormInput type="password" name="password" label="password"  value={this.state.password} onChange={this.handleChange} required />

                    <FormInput type="password" name="confirmPassword" label="confirm password" value={this.state.confirmPassword}
                    onChange={this.handleChange} required />

                    <CustomButton type="submit" > 
                        Sign Up 
                    </CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;