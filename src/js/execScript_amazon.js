let oldTitle = document.title;

//Example Title transformations:
//"Amazon.com: abc" -> "S: abc"
//"Amazon.com : abc" -> "S: abc"
let newTitle = oldTitle.replace(/^Amazon\.com\s*:\s*(.*)/, 'S: $1');

document.title = newTitle;
