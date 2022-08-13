import { useState } from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithEmailAndPassword, signInAuthUserWithEmailAndPassword
} from "../../utils/firebase.config";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import "../button/button.component"
import Button from "../button/button.component";

const defaultFromFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFromFields);
    const { email, password, } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFromFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label= "Email"
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: handleChange,
                        name: "email",
                        value: email,
                    }}
                />

                <FormInput
                    label= "Password"
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: handleChange,
                        name: "password",
                        value: password,
                    }}
                />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default SignInForm;