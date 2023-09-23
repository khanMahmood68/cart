import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title:'Phone',
            price:9999,
            qty:1,
            img:''
        }
    }
    increaseQuantity = ()=>{
        console.log('this',this.state);
    }
    render(){
        const {title,price,qty} = this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="Increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/262/262038.png"
                            onClick={this.increaseQuantity}
                        />

                        <img 
                            alt="Decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#777'
    }
}
export default CartItem;