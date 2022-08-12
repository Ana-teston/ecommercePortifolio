import  { signInWithGooglePopup } from "../../utils/firebase.config";


const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }


    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Pop up
            </button>
        </div>
    );
}

export default SignIn;