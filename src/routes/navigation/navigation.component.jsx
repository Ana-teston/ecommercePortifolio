import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/card-icon/cart-icon.component";
import { UserContext } from "../../context/user.context";
import { ReactComponent as BomJourLogo } from "../../assets/logobj.svg";
import { signOutUser } from "../../utils/firebase.config";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart.context";
import {LogoContainer, NavigatorContainer, NavLink, NavLinks} from "./navigation.styles";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)


    return (
        <Fragment>
            <NavigatorContainer>
                <LogoContainer to='/'>
                    <BomJourLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' className='nav-link' onClick={signOutUser}> SIGN OUT</NavLink>
                        ) : (
                            <NavLink className='nav-link' to='/auth'>SIGN IN</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigatorContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;