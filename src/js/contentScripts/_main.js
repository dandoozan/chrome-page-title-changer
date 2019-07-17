import { getContentScriptObject } from '../utils';

function setTitle(title) {
    document.title = title;
}

function urlContainsFragment(url, fragment) {
    return url.indexOf(fragment) > -1;
}

(function main() {
    //NOTE: "pageModule" is available as a global variable because
    //each of the page scripts are built as a "library" by webpack, which exports the
    //module as a global variable.  I had to do it this way because chrome extensions don't
    //allow loading actual es modules as content scripts yet.  In the future, each page script
    //should be an es module, which means I'll be able to dynamically "import()" them here (instead
    //of using a global variable), but until then, this is the best solution I could come up with.

    let url = window.location.href;

    //first, get the config for this page
    let { fragment, title: newTitle } =
        getContentScriptObject(url).my_config || {};

    //then, set the title
    //NOTE: I have to check for the 'fragment' part of the url (ie. the part
    //after the '#') here b/c the manifest 'matches' url thing doesn't take
    //into account the url fragment
    if (!fragment || urlContainsFragment(url, fragment)) {
        //todo: remove the ".default"
        setTitle(newTitle || pageModule.default.getNewTitle(document.title));
    }
})();
