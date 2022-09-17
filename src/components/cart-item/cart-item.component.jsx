import {CartItemContainer, Img, ItemsDetails, NameProduct, PriceProduct} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemsDetails>
                <NameProduct>{name}</NameProduct>
                <PriceProduct>
                    {quantity} x R${price}
                </PriceProduct>
            </ItemsDetails>
        </CartItemContainer>
    );
};
export default CartItem;