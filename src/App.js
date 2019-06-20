import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ClientList from './components/client-list';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ClientList />
            </div>
        </Provider>
    );
}

export default App;
