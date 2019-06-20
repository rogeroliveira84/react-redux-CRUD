import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import DynamicForm from '@rogeroliveira84/react-dynamic-forms';
import configData from '@rogeroliveira84/react-dynamic-forms/src/config/simple.json';

function saveClientAction(name) {
    return { type: 'SAVE_CLIENT', name }
}

export default function ClientEdit() {
    const clients = useSelector(state => state.data);
    const dispatch = useDispatch();

    function saveClient() {
        return dispatch(saveClientAction('Fulano'));
    }

    function submitHandler(event) {
        let json = JSON.stringify(event, null, 4);
        console.log(json);
    }

    function handleEdit(value) {
        console.log(`edit: ${value.target.value}`);
    }

    return (
        <div className="client-list">
            <h1>Client</h1>
            <button type="button" onClick={saveClient}>
                Save Client
            </button>
            <DynamicForm config={configData} onSubmit={(event) => this.submitHandler(event)} />
        </div>
    );
}
