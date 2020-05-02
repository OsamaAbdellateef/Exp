import React from 'react'
import CollectionItem from './../collection-item/collection-item.component';
import './collection-preview.style.scss'

const CollectionPreview  = ({title, items}) => {
    return(
        <div className="collection-preview mb-5 mt-5" >
            <h1 className="mb-5">{title}</h1>
            <div className="preview" >
                {items.filter((item,index) => 
                    index < 4).map(({id,...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                    
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;