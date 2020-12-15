import React from 'react';
import { NavLink } from 'react-router-dom';

const Workout = () => {
    return (
        <>
            <div className="workout">
                <div className="header">
                    <h1>Playlist</h1>
                    <div className="header-det">
                        <div className="box">
                            <h2>Workout</h2>
                        </div>
                        <div className="des">
                            <p>Playlist</p>
                            <h2>Workout</h2>
                            <p>Watches Time Pieces Of Eternity</p>
                            <div className="actions">
                                <NavLink exact to="" className="play">Play</NavLink>
                                <i className="far fa-heart"></i>
                                <i className="fa fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <div className="list-des">
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100px" }}>
                            <h4>1</h4>
                            <i className="far fa-heart"></i>
                        </div>
                        <h3>Pictures in the sky</h3>
                        <h4>Francis Tyler</h4>
                        <p>3:28</p>
                        <i className="fa fa-ellipsis-v"></i>
                    </div>

                    <div className="list-des">
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100px" }}>
                            <h4>1</h4>
                            <i className="far fa-heart"></i>
                        </div>
                        <h3>Pictures in the sky</h3>
                        <h4>Francis Tyler</h4>
                        <p>3:28</p>
                        <i className="fa fa-ellipsis-v"></i>
                    </div>

                    <div className="list-des">
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100px" }}>
                            <h4>1</h4>
                            <i className="far fa-heart"></i>
                        </div>
                        <h3>Pictures in the sky</h3>
                        <h4>Francis Tyler</h4>
                        <p>3:28</p>
                        <i className="fa fa-ellipsis-v"></i>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Workout;
