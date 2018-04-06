import React, { Component } from 'react';


class ListItem extends Component {

  render() {
    const {name,price,deleteProduct} = this.props
    return (
      <div>
        <span>{name}</span>
        {` | `}
        <span>{price}</span>
        {` | `}
        <button onClick={()=>deleteProduct(name)}>Delete</button>
      </div>

    );
  }
}

export default ListItem;
