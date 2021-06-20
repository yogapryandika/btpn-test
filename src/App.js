import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Contacts from './components/Contacts';

import './sass/main.scss'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className='container'>
          <Contacts />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
