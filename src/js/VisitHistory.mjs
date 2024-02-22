const visit = {
    symbol: '',
    datetime: '',
    numberOfVisits: 0,
    typeOfItem: '',

}

const KEYSTORAGE = 'visits';
export function RegisterVisit(symbol, category) {
    let visits = JSON.parse(localStorage.getItem(KEYSTORAGE));;
    let currentTime = Date.now();
    if (visits == null) {
        visits = [];
    }
    if (checkVisit(symbol) == -1) {
        visit.symbol = symbol;
        visit.typeOfItem = category;
        visit.numberOfVisits = 1;
        visit.datetime = new Date(currentTime);
        visits.push(visit);
        console.log(visits);
    }
    else {
        let index = checkVisit(symbol);

        visits[index].numberOfVisits = visits[index].numberOfVisits + 1;
        visit.datetime = new Date(currentTime);

    }
    localStorage.setItem(KEYSTORAGE, JSON.stringify(visits));
}
function checkVisit(symbol) {
    let visits = JSON.parse(localStorage.getItem(KEYSTORAGE));
    return visits.findIndex(item => item.symbol.toLowerCase() === symbol.toLowerCase());
}
export function GetVisits() {
    return JSON.parse(localStorage.getItem(KEYSTORAGE));
}