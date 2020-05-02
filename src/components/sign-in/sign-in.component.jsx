import React from 'react';
import './sign-in.style.scss';
import { Button } from 'react-bootstrap';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            
        } catch (error) {
            console.log('error' , error);
        }

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        }, () => {
            console.log(value);
        });

    }

    render() {
        return (

            <div className="sign-in">
                <h4 className="mb-4 text-capitalize">i already have an account</h4>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" required value={this.state.email} onChange={this.handleChange}
                        label="email" />
                    <FormInput value={this.state.password} name="password" onChange={this.handleChange} type="password" label="password" />
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton type="submit" onClick={signInWithGoogle} >
                        Sign In With Google
                    </CustomButton>
                </form>
            </div>

        )
    }
}

export default SignIn;