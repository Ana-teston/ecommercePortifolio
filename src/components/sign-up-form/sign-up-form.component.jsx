import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase.config";
import './sign-up-form.styles.scss';

const defaultFromFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFromFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFromFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('password do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error)
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text"
                       required onChange={handleChange}
                       name="displayName"
                       value={displayName}/>

                <label>Email</label>
                <input type="email"
                       required onChange={handleChange}
                       name="email"
                       value={email}/>

                <label>Password</label>
                <input type="password"
                       required onChange={handleChange}
                       name="password"
                       value={password}/>

                <label>Confirm Password</label>
                <input type="password"
                       required onChange={handleChange}
                       name="confirmPassword"
                       value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;