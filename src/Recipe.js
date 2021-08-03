import React, { Component } from 'react';
import './Styles.css';

class Recipe extends Component {
    render() { 
        return ( 
            <section id="recipe">
                <section>
                    <label>
                        <input id="test" type="checkbox" />
                        1 1/2 cups milk</label>
                    <label>
                        <input type="checkbox" />
                        1/2 cup mascarpone</label>
                    <label>
                        <input type="checkbox" />
                        1/2 tsp pink salt</label>
                    <label>
                        <input type="checkbox" />
                        1 lb Black Mission Figs</label>
                    <label>
                        <input type="checkbox" />
                        1/2 cup brown sugar</label>
                    <label>
                        <input type="checkbox" />
                        2-4 tbsp water</label>

                </section>
                <section>
                    <label>
                        <input type="checkbox" />
                        1 1/2 cups heavy cream</label>
                    <label>
                        <input type="checkbox" />
                        <strike>1/3 cup granulated sugar</strike></label>
                    <label>
                        <input type="checkbox" />
                        <strike>2 egg yolks</strike></label>
                    <label>
                        <input type="checkbox" />
                        1 lemon, juiced</label>
                    <label>
                        <input type="checkbox" />
                        2 tbsp butter</label>
                    <label>
                        <input type="checkbox" />
                        1 cup honey roasted pecans, roughly chopped</label>
                    
                </section>    
            </section>
         );
    }
}
 
export default Recipe;