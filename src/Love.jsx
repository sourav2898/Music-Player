import React from 'react';

const Love = (props) => {
    return (
        <>
            <div className="love">
                <div className="header">
                    <h1>Search Result for "Love"</h1>
                    <div className="live_concert">
                        <h2>Live Concert</h2>
                        <div className="box">
                            <div className="oval">
                                <i className="fa fa-music" aria-hidden="true"></i>
                            </div>
                            <p>245 people watching right now</p>
                        </div>
                    </div>
                </div>
                <div className="track">
                    <h2>Track</h2>
                    <div className="track-des">
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100px" }}>
                            <h4>1</h4>
                            <i className="far fa-heart"></i>
                        </div>
                        <h3>Pictures in the sky</h3>
                        <h4>Francis Tyler</h4>
                        <p>3:28</p>
                        <i className="fa fa-ellipsis-v"></i>
                    </div>

                    <div className="track-des">
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100px" }}>
                            <h4>1</h4>
                            <i className="far fa-heart"></i>
                        </div>
                        <h3>Pictures in the sky</h3>
                        <h4>Francis Tyler</h4>
                        <p>3:28</p>
                        <i className="fa fa-ellipsis-v"></i>
                    </div>

                    <div className="track-des">
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

export default Love;
