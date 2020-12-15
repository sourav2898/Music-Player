import React from 'react';

const Navbar = (props) => {
    
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
                            <li><a href="/"><i className="fa fa-home" aria-hidden="true"></i>Home</a></li>
                            <li><a href="/"><i className="fa fa-globe" aria-hidden="true"></i>Browse</a></li>
                            <li><a href="/"><i className="fa fa-signal" aria-hidden="true"></i>Radio</a></li>
                            <li><a href="/"><i className="fa fa-user" aria-hidden="true"></i>Artist</a></li>
                            <li><a href="/"><i className="fa fa-music" aria-hidden="true"></i>Albums</a></li>
                        </ul>
                    </div>
                    <div className="music">
                        <h4> My Music </h4>
                        <ul>
                            <li><a href="/"><i className="fa fa-redo"></i>Recent Played</a></li>
                            <li><a href="/"><i className="fa fa-heart"></i>Favourite</a></li>
                            <li><a href="/"><i className="fa fa-download" aria-hidden="true"></i>Downloaded</a></li>
                        </ul>
                    </div>
                    <div className="playlist">
                        <h4> Playlist </h4>
                        <ul>
                            <li><a href="/workout"><i className="fa fa-music" aria-hidden="true"></i>Workout</a></li>
                            <li><a href="/"><i className="fa fa-music" aria-hidden="true"></i>Yoga</a></li>
                            <li><a href="/"><i className="fa fa-headphones" aria-hidden="true"></i>Commute</a></li>
                        </ul>
                    </div>
                    <div className="footer">
                        <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
                        <h3>Add New Playlist</h3>
                    </div>
                </div>
                <div className="topbar">
                    <div className="left">
                        <span> <i class="fas fa-angle-left"></i> </span>
                        <span> <i class="fas fa-angle-right"></i> </span>
                        <form action="/love">
                            <input type="text" placeholder="search for track, artist or album" value={props.search} onChange={(e) => props.change(e)} />
                        </form>
                    </div>
                    <div className="right">
                        <span> <i class="fas fa-bell"></i> </span>
                        <span> <i class="fas fa-cog"></i> </span>
                    </div>
                </div>
                <div className="playbar">
                    <div className="song">
                        <h4>Pictures in the sky</h4>
                        <p>Francis Tyler</p>
                    </div>
                    <div className="controller">
                        <i className="fa fa-redo"></i>
                        <i class="fas fa-backward"></i>
                        <i class="fas fa-pause-circle"></i>
                        <i class="fas fa-forward"></i>
                        <i class="fas fa-random"></i>
                    </div>
                    <div className="seekbar">
                        <p>1:50</p>
                        <input type="range" min="1" max="250" value="150" class="slider" id="myRange" />
                        <p>2:50</p>
                    </div>
                    <div className="next">
                        <h4>Up Next</h4>
                        <p>Winnie Jordan</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
