import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ReactComponent as BomJourLogo } from "../../assets/logobj.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase.config";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);


    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <BomJourLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>SIGN IN</Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;