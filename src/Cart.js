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
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
        
               {products.map((product)=>{
                return (
                    <CartItem product={product} key={product.id}/>
                 )
               })}
            </div>
            
        )
    }
}

export default Cart;