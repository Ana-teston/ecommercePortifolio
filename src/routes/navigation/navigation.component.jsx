import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/card-icon/cart-icon.component";
import { UserContext } from "../../context/user.context";
import { ReactComponent as BomJourLogo } from "../../assets/logobj.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase.config";
import CartDropdown from "../../components/card-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart.context";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)


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
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;