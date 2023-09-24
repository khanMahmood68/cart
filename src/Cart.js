import React from "react";
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[{
                title:'Mobile Phone',
                price:9999,
                qty:3,
                img:'',
                id:1
            },
            {
                title:'Watch',
                price:99,
                qty:10,
                img:'',
                id:2
            },
            {
                title:'Laptop',
                price:29999,
                qty:2,
                img:'',
                id:3
            }]
        }
    }


    // For increasing Quantity
    handleIncreaseQuantity = (product)=>{

        console.log("Hey please increase the quantity of the", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }


    // For decreasing Quantity
    handleDecreaseQuantity = (product)=>{

        console.log("Hey please decrease the quantity of the", product);
        const {products} = this.state;
        const index = products.indexOf(product);
       
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        
        this.setState({
            products
        })
    }


    // For deleting the product

    handleDeleteProduct = (id)=>{
        const {products} = this.state;

        const items = products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
        
               {products.map((product)=>{
                return (
                    <CartItem
                     product={product} 
                     key={product.id} 
                     onIncreaseQuantity={this.handleIncreaseQuantity}
                     onDecreaseQuantity={this.handleDecreaseQuantity}
                     onDeleteProduct={this.handleDeleteProduct}
                     />
                 )
               })}
            </div>
            
        )
    }
}

export default Cart;