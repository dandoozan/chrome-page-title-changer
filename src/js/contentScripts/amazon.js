import { Page } from './_Page'

export default class Amazon extends Page {
    static getNewTitle(oldTitle) {
        //Example Title transformations:
        //"Amazon.com: abc" -> "S: abc"
        //"Amazon.com : abc" -> "S: abc"

        return oldTitle.replace(/^Amazon\.com\s*:\s*(.*)/, 'S: $1');
    }
}
