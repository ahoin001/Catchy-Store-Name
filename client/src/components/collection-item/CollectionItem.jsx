import React from 'react';
import { connect } from 'react-redux'

import { addCartItem } from '../../redux/cart-dropdown/cart-dropdown-actions'

import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddButton
} from './collection-item-styles'

const CollectionItem = (props) => {

    return (
        <CollectionItemContainer>

            <BackgroundImage imageUrl={props.item.imageUrl} />

            <CollectionFooterContainer>
                <NameContainer> {props.item.name}</NameContainer>
                <PriceContainer>{props.item.price}$</PriceContainer>
            </CollectionFooterContainer>

            <AddButton
                inverted
                onClick={() => { props.addItem(props.item) }}
            >
                ADD TO CART
            </AddButton>

        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({

    addItem: (item) => dispatch(addCartItem(item))

})


export default connect(null, mapDispatchToProps)(CollectionItem);