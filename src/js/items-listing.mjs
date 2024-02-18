import { ListStocks } from './ListStocks.mjs';
import { GetData, GetParams, GetTitle, SetTitle, ListCard } from './utils';

const gridContent = document.getElementById('grid-list')
const titleList = document.getElementById('title-list');
let listStocks;


async function init() {
    let category = GetParams('category');
    listStocks = new ListStocks(category);
    SetTitle(category, document);
    SetTitleList(category);
    let data = await GetData(category);
    listStocks.SetList(data.data);
    RenderItemList(gridContent, data.data);
    console.log(listStocks.GetList());
}
function SetTitleList(category) {
    let title = GetTitle(category)
    titleList.innerHTML = '';
    titleList.innerHTML = title;
}
function RenderItemList(grid, items) {
    console.log(grid);
    items.forEach(item => {
        let card = ListCard(item);
        let listElement = document.createElement('li');
        listElement.innerHTML = card;
        grid.appendChild(listElement);
    });
}
init();