import { GetVisits } from './VisitHistory.mjs';
import { ListCardHistory } from './utils';

const historyElement = document.getElementById('history');

function init() {
    const visits = GetVisits();
    let orderVisits = [];
    if (checkHistory(visits)) {
        orderVisits = GetHistoryOrderedByDate(visits);
    }
    RenderHistory(orderVisits);

}
function checkHistory(visits) {
    historyElement.innerHTML = '';
    if (visits == null || visits.length == 0) {
        historyElement.innerHTML = '<p><strong>No item is in your history</strong></p>';
        return false;
    }
    return true;
}
function GetHistoryOrderedByDate(visits) {
    return visits.sort((a, b) => new Date(a.datetime).getMilliseconds() < new Date(b.datetime).getMilliseconds());
}
function RenderHistory(visits) {
    historyElement.innerHTML = '';
    visits.forEach(visit => {
        let listElement = document.createElement('li');
        listElement.innerHTML = ListCardHistory(visit);
        historyElement.appendChild(listElement);
    });
}
init();


