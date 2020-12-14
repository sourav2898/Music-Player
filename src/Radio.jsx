import React from 'react';
import { NavLink } from 'react-router-dom';

const Radio = () => {

    return (
        <>
            <div className="radio">
                <div className="header">
                    <h1>Radio</h1>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="card-title" style={{ backgroundColor: "#4C4CAB" }}>
                            <NavLink exact to="/" className="h3"><h3>Radio</h3> </NavLink>
                        </div>
                        <div className="subtitle">
                            <h3>Home Radio</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title" style={{ backgroundColor: "#FF808B" }}>
                            <NavLink exact to="/" className="h3"><h3>Radio</h3> </NavLink>
                        </div>
                        <div className="subtitle">
                            <h3>Broadcast Radio</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title" style={{ backgroundColor: "#4C4CAB" }}>
                            <NavLink exact to="/" className="h3"><h3>Radio</h3> </NavLink>
                        </div>
                        <div className="subtitle">
                            <h3>Space Radio</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title" style={{ backgroundColor: "#131336" }}>
                            <NavLink exact to="/" className="h3"><h3>Radio</h3> </NavLink>
                        </div>
                        <div className="subtitle">
                            <h3>Home Radio</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title" style={{ backgroundColor: "#42425E" }}>
                            <NavLink exact to="/" className="h3"><h3>Radio</h3> </NavLink>
                        </div>
                        <div className="subtitle">
                            <h3>Broadcast Radio</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title" >
                            <h3></h3>
                        </div>
                        <div className="">
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Radio;
