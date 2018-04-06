import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'

class CreateItem extends Component {

  // const {createProduct} = this.props

  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target,{hash:true})
    console.log(values)
    this.props.createProduct(values)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" placeholder="Product Name"/>
      <input type="text" name="price" placeholder="Product Price"/>
      <button>Add Product</button>
      </form>
    )

  }


}

export default CreateItem;
