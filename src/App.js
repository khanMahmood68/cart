import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // products: [{
      //   title: 'Mobile Phone',
      //   price: 9999,
      //   qty: 1,
      //   img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      //   id: 1
      // },
      // {
      //   title: 'Watch',
      //   price: 99,
      //   qty: 1,
      //   img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
      //   id: 2
      // },
      // {
      //   title: 'Laptop',
      //   price: 29999,
      //   qty: 1,
      //   img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      //   id: 3
      // }]

      products:[],
      loading:true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount (){ 
    
    // For showing the data and when we update anything in firebase then we should refresh the 
    // the page for showing the updated data


    //  firebase
    //  .firestore()
    //  .collection('products')
    //  .get()
    //  .then((snapshot)=>{
    //   console.log(snapshot);

    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   })

    //   const products = snapshot.docs.map((doc)=>{
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading:false

    //   })
    //  })

    // In this the data is automatically updated without refreshing the page
   this.db
    .collection('products')
    // for asccending oredr by default
    // .orderBy('price')
    // .where('price','>=',999)
    // for deccending order
    .orderBy('price','desc')
    .onSnapshot((snapshot)=>{
      console.log(snapshot);
 
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })
 
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
 
      this.setState({
        products,
        loading:false
 
      })
     })
     
  }


  // For increasing Quantity
  handleIncreaseQuantity = (product) => {

    console.log("Hey please increase the quantity of the", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
     .update({
      qty:products[index].qty+1
     })
     .then(()=>{
      console.log('Updated Successfully');
     })
     .catch((err)=>{
      console.log('error : ',err);
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

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
    .update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log("Updated Successfully");
    })
    .catch((err)=>{
      console.log('Error', err);
    })
  }


  // For deleting the product

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log("Deleted Successfully");
    })
    .catch((err)=>{
      console.log('Error', err);
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
  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      title:'Washing Machine',
      price:29999,
      qty:3,
      img:'data:image/jpeg;base64,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'      
    })
    .then((docRef)=>{
      console.log("Product has been added", docRef);
    })
    .catch((err)=>{
      console.log("Error : ", err);
    })
  }

  render() {
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a product</button>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding:10,fontSize:20}}>Total:{this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
