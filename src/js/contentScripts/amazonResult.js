import { Page } from './_Page'

export default class AmazonResults extends Page {
    static getNewTitle(oldTitle) {
        //Example Title transformations:
        //"Amazon.com: abc" -> "abc"
        //"Amazon.com : abc" -> "abc"

        return oldTitle.replace(/^Amazon\.com\s*:\s*(.*)/, '$1');
    }
}
