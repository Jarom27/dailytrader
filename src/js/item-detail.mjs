import { GetParams } from "./utils";
let category = '';
let symbol = '';
async function init() {
    category = GetParams('category');
    symbol = GetParams('symbol');
}

init();