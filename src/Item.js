import React, { Component } from 'react';

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <label>
                    <input type="checkbox" />
                        <div className="ingredients"> {this.props.amount} {this.props.name} </div>
                </label>
            </>
         );
    }
}
 
export default Item;