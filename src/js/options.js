import { readFromStorage, writeToStorage, clearStorage } from './utils';

function displayMessage(id, msg) {
    var el = document.getElementById(id);
    el.textContent = msg;
    setTimeout(function() {
        el.textContent = '';
    }, 750);
}

// Saves options to chrome.storage
async function saveOptions() {
    //todo: handle case when the textarea doesnt contain valid json
    //todo: try just saving the options as json
    await writeToStorage({
        options: JSON.stringify(
            JSON.parse(document.getElementById('optionsTextArea').value)
        ),
    });

    // Update status to let user know options were saved
    displayMessage('saveStatus', 'Options saved.');
}

// Restores preferences stored in chrome.storage
async function restoreOptions() {
    // console.log(`***` + (await readFromStorage(null)));
    let options = JSON.parse(
        (await readFromStorage({ options: '{}' })).options
    );
    console.log('​restoreOptions -> options=', options);

    //display the options on the page
    document.getElementById('optionsTextArea').value = JSON.stringify(
        options,
        null,
        '    '
    );
}

async function clearOptions() {
    await clearStorage();
    await restoreOptions();
    displayMessage('clearStatus', 'Options cleared.');
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);
document.getElementById('clearButton').addEventListener('click', clearOptions);
