import { text } from '../helpers/dom';

let originalTitle = document.title;

//prevent changing the title a second time if it was already changed
if (!originalTitle.includes(' - ')) {
  //wait a little bit to give the [data-stringtype="artboardName"] element time to render (it's not rendered on page load)
  setTimeout(() => {
    let artboardName = text('[data-stringtype="artboardName"]');
    if (artboardName) {
      document.title = `${artboardName} - ${originalTitle}`;
      console.log(`*** Changed title to: ${document.title}`);
    }
  }, 1000);
}
