import React, { Component } from 'react';
import './Styles.css';

import printIcon from './assets/print-icon.png';
import chocoPizza from './assets/choco-pizza.png';

class Body extends Component {
    render() { 
        return ( 
            <main>
                <section className="border" />
                <section id="choco-pizza">
                    <section>
                        <h1>Chocolate Pizza</h1>
                        <h3>Posted on 15th Dec 2013 / Desserts</h3>
                    </section>
                    <section>
                        <h3><img src={printIcon} alt="Print the current page" /> Print</h3>
                    </section>

                    <img src={chocoPizza} alt="A small disk made of solid white chocolate with various chocolate and wafer candies embedded in the top. Behind it, a similar milk chocolate disk is cut in half." />
                    <section>
                        <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in a saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                        <p>Ice cream: In a small pot over medium heat, combine milk, and granulated sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                        <p>Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding the mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass Tupperware. Freeze for at least two hours before serving.</p>
                    </section>
                </section>
            </main>
         );
    }
}
 
export default Body;