import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [{
        title: 'Mobile Phone',
        price: 9999,
        qty: 3,
        img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
        id: 1
      },
      {
        title: 'Watch',
        price: 99,
        qty: 10,
        img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
        id: 2
      },
      {
        title: 'Laptop',
        price: 29999,
        qty: 2,
        img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        id: 3
      }]
    }
  }


  // For increasing Quantity
  handleIncreaseQuantity = (product) => {

    console.log("Hey please increase the quantity of the", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }


  // For decreasing Quantity
  handleDecreaseQuantity = (product) => {

    console.log("Hey please decrease the quantity of the", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    })
  }


  // For deleting the product

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }

  getCartCount=()=>{
    const{products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty
    })
    return count;
  }

  getCartTotal=()=>{
    const{products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price
    })
    return cartTotal;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10,fontSize:20}}>Total:{this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
