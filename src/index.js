import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import * as serviceWorker from './serviceWorker';

document.body.style = 'background: #fafafa;';

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(null, document.getElementById('navbar'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();