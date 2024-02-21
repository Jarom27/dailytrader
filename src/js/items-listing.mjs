import { ListStocks } from './ListStocks.mjs';
import { GetData, GetParams, GetTitle, SetTitle, ListCard } from './utils';

const gridContent = document.getElementById('grid-list')
const titleList = document.getElementById('title-list');
let listStocks;
let category = '';

async function init() {
    category = GetParams('category');
    listStocks = new ListStocks(category);
    SetTitle(category, document);
    SetTitleList();
    let data = await GetData(category);
    listStocks.SetList(data.data);
    RenderItemList(gridContent, ReduceListForPreferedData(listStocks));
    console.log(ReduceListForPreferedData(listStocks));
}
function ReduceListForPreferedData(list) {
    let param = '';
    let valueParam = '';
    switch (category) {
        case 'stocks':
            param = 'country'
            valueParam = 'United States'
            break;
        case 'forex_pairs':
            param = 'currency_group'
            valueParam = 'Major'
            break;

    }

    return list.FilterListByParam(param, valueParam);
}
function SetTitleList() {
    let title = GetTitle(category)
    titleList.innerHTML = '';
    titleList.innerHTML = title;
}
function RenderItemList(grid, items) {
    items.forEach(item => {
        let card = ListCard(item, category);
        let listElement = document.createElement('li');
        listElement.innerHTML = card;
        grid.appendChild(listElement);
    });
}
init();