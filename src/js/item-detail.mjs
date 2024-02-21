import { GetSpecificDataItem } from './ExternalServices.mjs';
import { TableForValues } from './graph';
import { GetParams, SetTitle } from './utils';

const tableData = document.getElementById('table-values');
const titleItem = document.getElementById('title-item');
let category = '';
let symbol = '';
async function init() {
    category = GetParams('category');
    symbol = GetParams('symbol');
    const data = await GetSpecificDataItem(symbol, category);
    TableForValues(tableData.tBodies[0], data.values);
    SetTitle(symbol, document)
    SetTitleItem();
}

function SetTitleItem() {
    titleItem.innerHTML = '';
    titleItem.innerHTML = symbol;
}
init();