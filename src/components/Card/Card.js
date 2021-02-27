import React from 'react';
import Product from '../Product/Product';

const Card = (props) => {
    
    const card= props.card
    console.log(card);
    // const totalPrice = card.reduce((total,Product)=>total+ Product.price,0)
    let totalPrice=0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        totalPrice=totalPrice+product.price;
    }
    let shipping =0;
    
    if(totalPrice>15){
        shipping=4.90;
    }else if(totalPrice>0){
        shipping=12.90;
    }if (totalPrice>35) {
        shipping=0;
    }
    const tax =Math.round(totalPrice/10)
    return (
        <div>
            <h4>order summary</h4>
            <p>Items ordered: {card.length} </p>
            <p>Product Price : {totalPrice}</p>
            <p><small>Shipping cost : {shipping}</small></p>
            <p><small>Tax + vat : {tax}</small></p>
            <p>Total Price : {Math.round((totalPrice+shipping+ tax).toFixed(2))}</p>
        </div>
    );
};

export default Card;