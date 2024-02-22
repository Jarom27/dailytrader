import { DetermineTrend } from './utils';


export function TableForValues(table, values) {

    values.forEach(element => {
        let newTR = document.createElement('tr');
        let trend = DetermineTrend(element.open, element.close);
        newTR.innerHTML = `<td>${element.datetime}</td><td>${element.high}</td><td>${element.low}</td><td>${element.open}/${element.close}</td><td><img class='trend' src='/images/icons/trend-${trend}.svg' alt='Trend ${trend}'></td>`;
        table.appendChild(newTR);
    });
}