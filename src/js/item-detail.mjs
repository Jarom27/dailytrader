import { GetSpecificDataItem } from './ExternalServices.mjs';
import { RegisterVisit } from './VisitHistory.mjs';
import { TableForValues } from './graph';
import { GetParams, SetTitle } from './utils';

const tableData = document.getElementById('table-values');
const titleItem = document.getElementById('title-item');
const informationHeader = document.getElementById('item-information');
let category = '';
let symbol = '';
async function init() {
    category = GetParams('category');
    symbol = GetParams('symbol');
    const data = await GetSpecificDataItem(symbol, category);
    TableForValues(tableData.tBodies[0], data.values);
    SetTitle(symbol, document)
    SetTitleItem();
    RenderHeader(data);
    RegisterVisit(symbol, category);
}
function RenderHeader(data) {
    informationHeader.innerHTML += `
        ${data.meta.currency_quote != null && data.meta.currency_base != null ? `<h3>Base: <span class= 'subtitle'>${data.meta.currency_base}</span> Quote: <span class= 'subtitle'>${data.meta.currency_quote}</span></h3>` : ''}
        ${data.meta.currency != null ? `<h3>Currency: <span class= 'subtitle'>${data.meta.currency}</span></h3>` : ''}
        <p>Type: ${data.meta.type}</p>
        
    `;
}
function SetTitleItem() {
    titleItem.innerHTML = '';
    titleItem.innerHTML = symbol;
}
init();