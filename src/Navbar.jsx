import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <div className="header">
                        <span><i className="fa fa-headphones" aria-hidden="true"></i></span>
                        <h2>Musicale</h2>
                    </div>
                    <div className="navs">
                        <ul>
                            <li><a href="#"><i className="fa fa-home" aria-hidden="true"></i>Home</a></li>
                            <li><a href="#"><i className="fa fa-globe" aria-hidden="true"></i>Browse</a></li>
                            <li><a href="#"><i className="fa fa-signal" aria-hidden="true"></i>Radio</a></li>
                            <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i>Artist</a></li>
                            <li><a href="#"><i className="fa fa-music" aria-hidden="true"></i>Albums</a></li>
                        </ul>
                    </div>
                    <div className="music">
                        <h4> My Music </h4>
                        <ul>
                            <li><a href="#"><i className="fa fa-redo"></i>Recent Played</a></li>
                            <li><a href="#"><i className="fa fa-heart"></i>Favourite</a></li>
                            <li><a href="#"><i className="fa fa-download" aria-hidden="true"></i>Downloaded</a></li>
                        </ul>
                    </div>
                    <div className="playlist">
                        <h4> Playlist </h4>
                        <ul>
                            <li><a href="#"><i className="fa fa-music" aria-hidden="true"></i>Workout</a></li>
                            <li><a href="#"><i className="fa fa-music" aria-hidden="true"></i>Yoga</a></li>
                            <li><a href="#"><i className="fa fa-headphones" aria-hidden="true"></i>Commute</a></li>
                        </ul>
                    </div>
                </div>
                <div className="topbar">
                    <div className="left">
                        <span> <i class="fas fa-angle-left"></i> </span>
                        <span> <i class="fas fa-angle-right"></i> </span>
                        <input type="text" placeholder="search for track, artist or album" />
                    </div>
                    <div className="right">
                        <span> <i class="fas fa-bell"></i> </span>
                        <span> <i class="fas fa-cog"></i> </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
