import React, {Component} from 'react';

let link = 'https://www.w3schools.com/howto/img_avatar.png'

class Card extends Component {
  render(){
    return (
      <div className="card" style={{width: '400px'}}>
        <img className="card-img-top" src={link} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.text}</p>
          <div className="btn btn-primary">See Profile</div>
        </div>
      </div>
    );
  } 
}

class Alert extends Component {
  render() {
    return <div className={'alert alert-' + this.props.type} role='alert'>{this.props.children}</div>
  }
}

Alert.defaultProps = {
  type: 'danger'
}

export default Alert;
export {
  Card,
}
