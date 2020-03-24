import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style ={styles.image} />
                </div>

                <div className="right-block">
                    <div style={ {fontSize : 25} }>Asus</div>
                    <div style={ {color:"#777"} }>25000</div>
                    <div style={ {color:"#777"} }>Quantity : 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background:'#ccc'
    }
}

export default CartItem;