import { attr } from '../helpers/dom';

const TITLE_MAPPING = {
  '____📥 INBOX': '📥 Inbox',
  '___⭐️ ACTIONS': '⭐️ Actions',
  '___🕒 WAITING_FOR': '🕒 Waiting For',
  '___🗓 CALENDAR': '🗓 Calendar',
  '__♾️ INFINITY_PROJECTS': '♾ Infinity Projects',
  '__🏁 PROJECTS': '🏁 Projects',
};

//wait a little bit for Google's script to apply the "gk6SMd" class to the right element
setTimeout(() => {
  //find the sidebar items that's highlights to tell what page we're on. I need to
  //use this rather than the url because opening a note within that label changes the url
  document.title =
    TITLE_MAPPING[attr('div.gk6SMd', 'aria-label')] || document.title;

  console.log(`*** Changed title to: ${document.title}`);
}, 1000);
