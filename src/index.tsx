import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App/>, document.querySelector('#root'));
addEventListener('load', () => navigator.serviceWorker.register('../public/sw.ts'));