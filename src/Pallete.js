import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "./Pallete.css"

class Pallete extends Component{
    render(){
        const colorboxes= this.props.colors.map(c =>(
            <ColorBox background={c.color} name={c.name} key={c.name}/>
            
        ))
        return(
            <div className='Pallete'>
            {/* Navbar */}
            <div className='Pallete-colors'>
            {colorboxes}
            </div>
                <h1>Pallete</h1>
                {/* footer */}
            </div>
        )
    }
}

export default Pallete;