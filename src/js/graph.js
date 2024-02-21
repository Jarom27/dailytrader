export function TableForValues(table, values) {

    values.forEach(element => {
        let newTR = document.createElement('tr');
        newTR.innerHTML = `<td>${element.datetime}</td><td>${element.high}</td><td>${element.low}</td><td>${element.open}/${element.close}</td>`;
        table.appendChild(newTR);
    });
}