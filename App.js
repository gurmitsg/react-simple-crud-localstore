import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'
import CreateItem from './CreateItem'


const products = [
  {
    name: 'iPad',
    price: 200,
  },
  {
    name: 'iPhone',
    price: 300,
  }
]

localStorage.setItem('products',JSON.stringify(products))


class App extends Component {
  constructor(props) {
    super(props)
    // this.getProducts = this.getProducts.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.createProduct = this.createProduct.bind(this)
  }

  state = {
    products: []
  }

  componentWillMount(){
    const products = this.getProducts()

    this.setState({products: []})
    this.setState({products})
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products'))
  }

  deleteProduct(name) {
    console.log(`Product to be deleted ${name}`)
    const cur_products = this.getProducts()
    const filteredProducts = cur_products.filter(product => {
      return product.name !== name
    })
    console.log(cur_products)
    console.log(filteredProducts)
    this.setState({products:filteredProducts})
  }

  createProduct(product) {
    console.log(product.price)
    let cur_products = this.getProducts()
    cur_products.push({
      name: product.name,
      price: product.price
    })
    console.log(cur_products)
    this.setState({products: cur_products})
    localStorage.setItem('products',JSON.stringify(cur_products))
  }

  updateName(event) {
    this.setState({name1:event.target.value.toUpperCase()})
    //console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        { console.log(this.state.products)}

        <CreateItem createProduct={this.createProduct} />
        {
          this.state.products.map(product => {
            return(
                <ListItem
                  key={product.name}
                  {...product}
                  deleteProduct={this.deleteProduct}
                />

            )
          })
        }

      </div>
    );
  }
}

export default App;
