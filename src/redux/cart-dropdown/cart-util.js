export const addItemToCart = (cartItems, itemBeingAdded) => {

    const exsistingCartItem = cartItems.find(
        cartItem => cartItem.id === itemBeingAdded.id
    );

    if (exsistingCartItem) {

        // ? Return updated cartlist
        return cartItems.map((cartItem) => {

            // ? Retrun cartItem as object , with Increase qunatity of item
            return cartItem.id === itemBeingAdded.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        }

        )

    }

    // ? When the function first excecutes and there is no exsisting items, attatch quantity property
    return [...cartItems, { ...itemBeingAdded, quantity: 1 }]

}

export const removeItemInCart = (cartItems, itemBeingAdded) => {

    const exsistingCartItem = cartItems.find(
        cartItem => cartItem.id === itemBeingAdded.id
    );

    if (exsistingCartItem) {

        // ? Return updated cartlist
        return cartItems.map((cartItem) => {

            // ? Retrun cartItem as object , with Increase qunatity of item
            return cartItem.id === itemBeingAdded.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        }

        )

    }

    // ? When the function first excecutes and there is no exsisting items, attatch quantity property
    return [...cartItems, { ...itemBeingAdded, quantity: 1 }]

}
