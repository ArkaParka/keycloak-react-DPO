import React, { Component } from 'react';
import './Background.css';

class Background extends Component {
    render() {
        return (
            <div className="background">
                <div className="bg background"></div>
                <div className="bg midground"></div>
                <div className="bg foreground"></div>
            </div>
        )
    }
}

export default Background
