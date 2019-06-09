import React, {Component} from 'react';

class RealTime extends Component {
    constructor() {
        super()
        this.inputWrite = this.inputWrite.bind(this)

        this.state = {
            title: 'success',
        }
    }
    inputWrite(e) {
        this.setState ({
            title: e.target.value
        })
    }
    
    render(){
        return  <div>
                    <input type="text" onChange={this.inputWrite}/>
                    <h4 class={'alert alert-'+this.state.title}>{this.state.title}</h4>
                </div>
    }
}

export default RealTime;