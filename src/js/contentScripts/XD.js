import { text } from '../helpers/dom';

let originalTitle = document.title;

//wait a little bit to give the [data-stringtype="artboardName"] element time to render (it's not rendered on page load)
setTimeout(() => {
  document.title = `${text(
    '[data-stringtype="artboardName"]'
  )} - ${originalTitle}`;

  console.log(`*** Changed title to: ${document.title}`);
}, 1000);
