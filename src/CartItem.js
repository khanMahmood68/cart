import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title:'Mobile Phone',
            price:9999,
            qty:1,
            img:''
        }
    }
    increaseQuantity = ()=>{
        
        // Mthod-1     When previous state is not required
        // this.setState({
        //     qty:this.state.qty+1,
        // })


        // Method-2    If previous state is required then use it
        this.setState((prevState) =>{
            return {
            qty: prevState.qty+1,
          }});
    }


    decreaseQuantity = ()=>{

        const{qty} = this.state;
        if(qty == 0){
            return;
        }
        this.setState((dec) => {
            return{
                qty: dec.qty-1,
            }
            
          });
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
                            onClick={this.decreaseQuantity}
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