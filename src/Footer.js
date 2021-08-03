import React, { Component } from 'react';
import './Styles.css';

import vanPic from './assets/van-pic.png';
import smallLogo from './assets/small-logo.png';

class Footer extends Component {
    render() { 
        return ( 
            <section>
                <section className="border" />
                    <article>
                        <img src={vanPic} alt="Vanessa Stevenson" />
                        <section>
                        <h2>Vanessa Stevenson</h2>
                        Food enthusiast, photography fan. Add a pinch of raw foods and that’s pretty much who I am.
                        </section>
                    <button>Share recipe</button>
                    </article>

                <footer>
                    <hr />
                    <img src={smallLogo} alt="Fork and knife" />
                    <p>Delicious &copy; 2013 &#8226; All Rights Reserved. <br /> Proudly Published With Ghost.</p>
                </footer>
            </section>
         );
    }
}
 
export default Footer;