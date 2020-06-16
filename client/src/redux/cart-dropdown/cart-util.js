// import CartItem from "../../components/cart/cart-item/cart-item";

export const addItemToCart = (cartItems, itemBeingAdded) => {

    const exsistingCartItem = cartItems.find(
        cartItem => cartItem.id === itemBeingAdded.id
    );

    if (exsistingCartItem) {

        // ? Return updated cartlist
        return cartItems.map((cartItem) => {

            // ? Return cartItem as object , with Increase qunatity of item
            return cartItem.id === itemBeingAdded.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        }

        )

    }

    // ? When the function first excecutes and there is no exsisting items, attatch quantity property
    return [...cartItems, { ...itemBeingAdded, quantity: 1 }]

}


export const removeItemInCheckout = (cartItems, itemBeingRemoved) => {

    const exsistingCartItem = cartItems.find(
        cartItem => cartItem.id === itemBeingRemoved.id
    );

    // ? Using reduce instead of filter and map makes it so array is only iterated once
    if (exsistingCartItem) {

        return cartItems.reduce((accumulator, currentItem) => {

            if (exsistingCartItem.quantity === 1) {

                // Return list without the item
                if (currentItem.id !== exsistingCartItem.id) {
                    const item = currentItem;
                    accumulator.push(item);
                }

            }

            if (exsistingCartItem.quantity > 1) {

                // Return list with the item with 1 less 
                if (currentItem.id === exsistingCartItem.id) {
                    const item = { ...currentItem, quantity: currentItem.quantity - 1 }
                    accumulator.push(item);

                } else {
                    accumulator.push(currentItem);
                }

            }

            return accumulator;

        }, []);

    }


}


