
const MANIFEST_OBJ = chrome.runtime.getManifest();

/*The below is from: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns
/**
 * Transforms a valid match pattern into a regular expression
 * which matches all URLs included by that pattern.
 *
 * @param  {string}  pattern  The pattern to transform.
 * @return {RegExp}           The pattern's equivalent as a RegExp.
 * @throws {TypeError}        If the pattern is not a valid MatchPattern
 */
function convertMatchPatternToRegExp(pattern) {
    if (pattern === '') {
        return (/^(?:http|https|file|ftp|app):\/\//);
    }

    const schemeSegment = '(\\*|http|https|file|ftp)';
    const hostSegment = '(\\*|(?:\\*\\.)?(?:[^/*]+))?';
    const pathSegment = '(.*)';
    const matchPatternRegExp = new RegExp(
        `^${schemeSegment}://${hostSegment}/${pathSegment}$`
    );

    let match = matchPatternRegExp.exec(pattern);
    if (!match) {
        throw new TypeError(`"${pattern}" is not a valid MatchPattern`);
    }

    let [, scheme, host, path] = match;
    if (!host) {
        throw new TypeError(`"${pattern}" does not have a valid host`);
    }

    let regex = '^';

    if (scheme === '*') {
        regex += '(http|https)';
    } else {
        regex += scheme;
    }

    regex += '://';

    if (host && host === '*') {
        regex += '[^/]+?';
    } else if (host) {
        if (host.match(/^\*\./)) {
            regex += '[^/]*?';
            host = host.substring(2);
        }
        regex += host.replace(/\./g, '\\.');
    }

    if (path) {
        if (path === '*') {
            regex += '(/.*)?';
        } else if (path.charAt(0) !== '/') {
            regex += '/';
            regex += path.replace(/\./g, '\\.').replace(/\*/g, '.*?');
            regex += '/?';
        }
    }

    regex += '$';
    return new RegExp(regex);
}

function getPropertyFromConfig(url, property) {
    let manifestObj = MANIFEST_OBJ;
    let contentScripts = manifestObj.content_scripts;
    for (let scriptObj of contentScripts) {
        let matchesArr = scriptObj.matches;
        for (let urlPatternAsMatchPattern of matchesArr) {
            let urlPatternAsRegex = convertMatchPatternToRegExp(urlPatternAsMatchPattern);
            if (new RegExp(urlPatternAsRegex).test(url)) {
                return scriptObj[property];
            }
        }
    }
}

function getUrl() {
    return window.location.href;
}

function setTitle(title) {
    document.title = title;
}

function urlContainsFragment(url, fragment) {
    return url.indexOf(fragment) > -1;
}


/* ---------- MAIN ---------- */
let url = getUrl();

//fyi, I have to check for the 'fragment' part of the url (ie. the part
//after the '#') here b/c the manifest 'matches' url thing doesn't take
//into account the url fragment
let urlFragment = getPropertyFromConfig(url, 'dpd_fragment');
if (!urlFragment || urlContainsFragment(url, urlFragment)) {
    let newTitleOfPage = getPropertyFromConfig(url, 'dpd_title');
    setTitle(newTitleOfPage);
}

