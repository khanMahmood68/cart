// import React from "react";

// class CartItem extends React.Component{

//     // constructor(){
//     //     super();
//     //     this.state={
//     //         products:{
//     //             title:'Mobile Phone',
//     //             price:9999,
//     //             qty:3,
//     //             img:'',
//     //             id:1
//     //         },
//     //     }
//     // }
  
//     // increaseQuantity = ()=>{

//     //     // Mthod-1     When previous state is not required
//     //     // this.setState({
//     //     //     qty:this.state.qty+1,
//     //     // })


//     //     // Method-2    If previous state is required then use it
//     //     this.setState((prevState) =>{
//     //         return {
//     //         qty: prevState.qty+1,
//     //       }});
//     // }


//     // decreaseQuantity = ()=>{

//     //     const{qty} = this.state;
//     //     if(qty == 0){
//     //         return;
//     //     }
//     //     this.setState((dec) => {
//     //         return{
//     //             qty: dec.qty-1,
//     //         }
            
//     //       });
//     // }



//     render(){
//         console.log("this.props",this.props);
//         // const {title,price,qty} = this.state
//         const {title,price,qty} = this.props.product
//         return(
//             <div className="cart-item">
//                 <div className="left-block">
//                     <img style={styles.image}/>
//                 </div>
//                 <div className="right-block">
//                     <div style={{fontSize:25}}>{title}</div>
//                     <div style={{color:'#777'}}>Rs {price}</div>
//                     <div style={{color:'#777'}}>Qty:{qty}</div>
//                     <div className="cart-item-actions">
//                         {/* Buttons */}
//                         <img
//                             alt="Increase" 
//                             className="action-icons" 
//                             src="https://cdn-icons-png.flaticon.com/512/262/262038.png"
//                             onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
//                         />

//                         <img 
//                             alt="Decrease" 
//                             className="action-icons" 
//                             src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
//                             onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
//                         />
//                         <img 
//                             alt="Delete" 
//                             className="action-icons" 
//                             src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
//                             onClick={()=>this.props.onDeleteProduct(this.props.product.id)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const styles = {
//     image:{
//         height:110,
//         width:110,
//         borderRadius:4,
//         background:'#777'
//     }
// }
// export default CartItem;

import React from "react";

const CartItem = (props) => {
  console.log("props", props);
  const { title, price, qty } = props.product;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={props.product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty:{qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="Increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/262/262038.png"
            onClick={() => props.onIncreaseQuantity(props.product)}
          />

          <img
            alt="Decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => props.onDecreaseQuantity(props.product)}
          />
          <img
            alt="Delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick={() => props.onDeleteProduct(props.product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#777",
  },
};

export default CartItem;
