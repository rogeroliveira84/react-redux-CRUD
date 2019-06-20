import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';

function addClientAction(name) {
    return { type: 'ADD_CLIENT', name }
}

export default function ClientList() {
    const clients = useSelector(state => state.data);
    const dispatch = useDispatch();

    function addClient() {
        return dispatch(addClientAction('Fulano'));
    }

    function handleEdit(value) {
        // todo: react-routes /client/edit/:name
        console.log(`edit: ${value.target.value}`);
    }

    return (
        <div className="client-list">
            <h1>Clients</h1>
            <button type="button" onClick={addClient}>
                Add Client
            </button>
            <div className="table">
                <div className="table-row header">
                    <div className="text">Name</div>
                </div>
                {
                    clients.map(client =>
                        <div key={client} className="table-row link" onClick={handleEdit}>
                            {client}
                        </div>
                    )
                }
            </div>
        </div>
    );
}
