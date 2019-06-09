import React from 'react';
import ReactDOM from 'react-dom';
import Alert, {Card} from './App';
import RealTime from './input';

let altype = 'info'

ReactDOM.render(<div>
                    <RealTime/> 
                    <Alert type={altype}>Salamlar</Alert> 
                    <Card name='Kenan Sultan' text='Card information about'/>
                </div>, document.getElementById('root'));
