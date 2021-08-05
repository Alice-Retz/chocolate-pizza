import React, { Component } from 'react';
import './Styles.css';
import ingredientItem from './IngredientListData';
import Item from './Item.js';

class Recipe extends Component {
    render() { 
        return ( 
            <section id="recipe">
                <section>
                        {ingredientItem.map((item) => (
                            <Item key={item.id} amount={item.amount} name={item.name}
                            />
                        ))}
                </section>    
            </section>
         );
    }
}
 
export default Recipe;