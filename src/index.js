import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FixedContainer from './Container'
import Tabs from './Tabs'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < FixedContainer / > , document.getElementById('container'));
ReactDOM.render( < Tabs / > , document.getElementById('tabs'));
serviceWorker.unregister();
