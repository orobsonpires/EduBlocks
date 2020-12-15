import 'firebase/analytics';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import * as React from 'preact';
import { newApp } from './app';
import { sleep } from './lib/util';
import Page from './views/Page';

async function main() {
    
    Blockly.HSV_VALUE = 0.9;

    const app = newApp();
    const pageDiv = getElementByIdSafe('page');

    if (!pageDiv.parentElement) {
        return;
    }

    const firebaseConfig = {
        apiKey: 'AIzaSyDsJfMGnGrAWKAGKm-sowLs1q_JfEGvF1Q',
        authDomain: 'auth.edublocks.org',
        databaseURL: 'https://edublocks-38d74.firebaseio.com',
        projectId: 'edublocks-38d74',
        storageBucket: 'edublocks-38d74.appspot.com',
        messagingSenderId: '1073955966212',
        appId: '1:1073955966212:web:b828491fbc775a2130d451',
        measurementId: 'G-ELDZXSL916',
    };

    firebase.initializeApp(firebaseConfig);

    
    
    firebase.analytics();

    await sleep(1000);

    React.render(<Page app={app} />, pageDiv.parentElement, pageDiv);

    function getElementByIdSafe(id: string): HTMLElement {
        const element = document.getElementById(id);

        if (!element) {
            throw new Error(`Could not find element with "${id}"`);
        }

        return element;
    }
}


main();
