import React from 'react';
import ShopData from './shop.data';
import PreviewComponent from '../../components/collection-preview/collection-preview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {Container} from 'react-bootstrap';

class Shop extends React.Component {

  constructor() {
    super();

    this.state = ShopData

  }
  //{this.state.collections.map((collection) => (<span>{collection.id}</span>))}
  render() {
    return (
      <Container>
        <div className="shop">
        {this.state.collections.map(({id, ...otherCollectionProps}) =>(
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
      </Container>
    )
  }


}

export default Shop;