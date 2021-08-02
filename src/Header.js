import React, { Component } from 'react';
import './Styles.css';

import bigLogo from './logo.png';
import fbIcon from './fb-icon.png';
import flicIcon from './flic-icon.png';
import gpIcon from './gp-icon.png';
import instaIcon from './insta-icon.png';
import mailIcon from './mail-icon.png';
import pintIcon from './pint-icon.png';
import rssIcon from './rss-icon.png';
import twitIcon from './twit-icon.png';

class Header extends Component {
    render() {
        return (
            <header>
                <div id="header-left">
                    <img src={bigLogo} className='header-image' alt="Delicious Logo, a dark grey square containing a simple, white illustration of a fork and knife sitting side by side." />
                    <div>
                        <h2>Delicious</h2>
                        <h4>THE BEST FOOD BLOG ON THE WEB</h4>
                    </div>
                </div>
                <nav>
                    <img src={fbIcon} alt="Facebook button" className="nav-icon" />
                    <img src={twitIcon} alt="Twitter button" className="nav-icon" />
                    <img src={gpIcon} alt="Google button" className="nav-icon" />
                    <img src={instaIcon} alt="Instagram button" className="nav-icon" />
                    <img src={flicIcon} alt="Flickr button" className="nav-icon" />
                    <img src={pintIcon} alt="Pinterest button" className="nav-icon" />

                    <img src={rssIcon} alt="RSS Feed button" className="nav-icon" />
                    <img src={mailIcon} alt="Email site owner button" className="nav-icon" />
                </nav>

            </header>
        );
    }
}

export default Header;