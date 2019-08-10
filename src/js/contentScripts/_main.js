import { getContentScriptObject } from '../helpers/chrome';

(async function main() {
    let url = window.location.href;
    let oldTitle = document.title;

    let { fragment, newTitle } =
        (await getContentScriptObject(url)) || {};

    //NOTE: I have to check for the 'fragment' part of the url (ie. the part
    //after the '#') here b/c the manifest 'matches' url thing doesn't take
    //into account the url fragment
    if (!fragment || url.indexOf(fragment) > -1) {
        //handle case where title is regex replacement
        if (Array.isArray(newTitle)) {
            let [from, to] = newTitle;
            document.title = oldTitle.replace(new RegExp(from), to);
        } else {
            document.title = newTitle;
        }
    }
})();
