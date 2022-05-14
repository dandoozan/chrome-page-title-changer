import { attr } from '../helpers/dom';

const TITLE_MAPPING = {
  '_📥 INBOX': '📥 Inbox',
  '__⭐️ ALL ACTIONS': '⭐️ All Actions',
  '__🗓 CALENDAR': '🗓 Calendar',
  '_🕒 WAITING_FORS': '🕒 Waiting Fors',
  '_🗂 PROJECT_SUPPORT_MTRL': '🗂 Project Support Material',
  '_♾ INFINITY_PROJECTS': '♾ Infinity Projects',
};

//wait a little bit for Google's script to apply the "gk6SMd" class to the right element
setTimeout(() => {
  //find the sidebar items that's highlights to tell what page we're on. I need to
  //use this rather than the url because opening a note within that label changes the url
  document.title =
    TITLE_MAPPING[attr('div.gk6SMd', 'aria-label')] || document.title;
}, 1000);
