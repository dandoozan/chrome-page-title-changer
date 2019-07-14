let oldTitle = document.title;

//Example Title transformations:
//"Amazon.com: abc" -> "abc"
//"Amazon.com : abc" -> "abc"
let newTitle = oldTitle.replace(/^Amazon\.com\s*:\s*(.*)/, '$1');

document.title = newTitle;
