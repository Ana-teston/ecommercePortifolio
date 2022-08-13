import  { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.config";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div>
            <h1>Sign In</h1>
            <Button onClick={logGoogleUser}>
                Sign In with Google Pop up
            </Button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;