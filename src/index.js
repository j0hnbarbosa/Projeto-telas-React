import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Rotas from './routes';

ReactDOM.render(
  <>
    <Rotas />
  </>
  , document.getElementById('root'));
        

serviceWorker.unregister();
