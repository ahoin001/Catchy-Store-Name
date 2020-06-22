import React from 'react';
import CollectionItem from '../collection-item/CollectionItem'

import './collection-preview.scss'

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview-styles';

const CollectionPreview = (props) => {

    // console.log(`PROPS IM LOGIN FOR &&&&&&&&`,props)

    return (
        <CollectionPreviewContainer>

            <TitleContainer>{props.title.toUpperCase()}</TitleContainer>

            <PreviewContainer>

                {/* Render 9 menu items from each collection for their preview */}
                {
                    props.items.filter((element, index) => index < 4)
                        .map((item) => {
                            return <CollectionItem key={item.id} item={item} />
                        })
                }

            </PreviewContainer>

        </CollectionPreviewContainer>
    );

};

export default CollectionPreview;