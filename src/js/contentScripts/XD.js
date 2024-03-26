import { text } from '../helpers/dom';

//wait a little bit to give the [data-stringtype="artboardName"] element time to render (it's not rendered on page load)
setTimeout(() => {
  let originalTitle = document.title;

  //if I had previously set the title, reset it (this is needed when navigating back to a page that was previously modified)
  if (originalTitle.includes(' - ')) {
    originalTitle = originalTitle.split(' - ')[1];
  }
  let artboardName = text('[data-stringtype="artboardName"]');
  document.title = artboardName
    ? `${artboardName} - ${originalTitle}`
    : originalTitle;
  console.log(`*** Changed title to: ${document.title}`);
}, 1000);
