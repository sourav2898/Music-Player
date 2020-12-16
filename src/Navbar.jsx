import React, {useState} from 'react';

const Navbar = (props) => {

    var i = 2;

    const [right, setright] = useState("-300px");

    const setting = () => {
        if(i%2 === 0 ){
            setright("0");
            ++i;
        }
        else{
            setright("-300px");
            ++i;
        }
        
    }

    const change = (e) => {
        props.change(e);
    }

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
                        <span><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
                        <h3>Add New Playlist</h3>
                    </div>
                </div>
                <div className="topbar">
                    <div className="left">
                        <span> <i className="fas fa-angle-left"></i> </span>
                        <span> <i className="fas fa-angle-right"></i> </span>
                        <form action="/love">
                            <input type="text" placeholder="search for track, artist or album" defaultValue={props.search} onChange={change} />
                        </form>
                    </div>
                    <div className="right">
                        <span> <i className="fas fa-bell"></i> </span>
                        <span id="setting" onClick={setting}> <i className="fas fa-cog"></i> </span>
                    </div>
                </div>
                <div className="playbar">
                    <div className="song">
                        <h4>Pictures in the sky</h4>
                        <p>Francis Tyler</p>
                    </div>
                    <div className="controller">
                        <i className="fa fa-redo"></i>
                        <i className="fas fa-backward"></i>
                        <i className="fas fa-pause-circle"></i>
                        <i className="fas fa-forward"></i>
                        <i className="fas fa-random"></i>
                    </div>
                    <div className="seekbar">
                        <p>1:50</p>
                        <input type="range" min="1" max="250" value="150" className="slider" id="myRange" />
                        <p>2:50</p>
                    </div>
                    <div className="next">
                        <h4>Up Next</h4>
                        <p>Winnie Jordan</p>
                    </div>
                </div>
            </div>
            {/*  settings  */}
            <div className="setting" style={{ right:`${right}`}}>
                <div className="free">
                    <h4 className="title">Free</h4>
                </div>

                <div className="show">
                    <div className="header">
                        <h4>Michelle Dunkin</h4>
                        <h5>Los Angeles</h5>
                    </div>

                    <div className="show-item">
                        <div className="icon">
                            <div className="icon-user friend">
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <h4>Friends</h4>
                        </div>
                        <p> 50 </p>
                    </div>

                    <div className="show-item">
                        <div className="icon">
                            <div className="icon-user heart" >
                                <i className="fa fa-heart"></i>
                            </div>
                            <h4>Likes</h4>
                        </div>
                        <p> 120 </p>
                    </div>

                    <div className="show-item">
                        <div className="icon">
                            <div className="icon-user music">
                                <i className="fa fa-music" aria-hidden="true"></i>
                            </div>
                            <h4>Playlist</h4>
                        </div>
                        <p> 3 </p>
                    </div>
                </div>

                <div className="folder">
                    <i className="fas fa-folder-open"></i>
                    <p>Upgrade to PRO for more benefits</p>
                    <button>Upgrade</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;
