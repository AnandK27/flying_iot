import React,{ Component } from 'react'
import {DisplayMapClass} from '.././components/DisplayMapClass';

class DroneControls extends Component{
    render() {
        return(
            <div>
            <h1 className="container">DroneControls</h1>
            <DisplayMapClass />
            </div>
        )
    }
}

export default DroneControls;