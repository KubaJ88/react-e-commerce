import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';


import './collection-overview.styles.scss';


const CollectionOverview = ({ collections }) => (

    <div className='shop-page'>{
        collections.map(({ id, ...otherCollectionProps }) =>
            <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        )
    }
    </div>
)

const mapStatetoProps = createStructuredSelector({
    collections: selectCollectionsForPreview
}) 

export default connect(mapStatetoProps)(CollectionOverview)