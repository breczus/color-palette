import React, { Component } from 'react';
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard"


class ColorBox extends Component{
    render(){
        const {background, name} = this.props
        return(
            <CopyToClipboard text={background}>
            <div style={{background}} className='ColorBox'>
            <div className='copy-container'>
                <div className='box-content'>
                <span>{name}</span>
                </div>
                <button className='copy-btn'>Copy</button>
                
            </div>
            <span className='see-more'>More</span>
            </div>
            </CopyToClipboard>

        )
    }
}

export default ColorBox;