(function main() {
    //NOTE: "pageModule" is available as a global variable because
    //each of the page scripts are built as a "library" by webpack, which exports the
    //module as a global variable.  I had to do it this way because chrome extensions don't
    //allow loading actual es modules as content scripts yet.  In the future, each page script
    //should be an es module, which means I'll be able to dynamically "import()" them here (instead
    //of using a global variable), but until then, this is the best solution I could come up with.

    //todo: do something with pageModule here
    pageModule.foo();

})();
