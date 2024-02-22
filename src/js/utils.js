export function GetParams(param) {
    const queryString = new URLSearchParams(window.location.search);
    let category = queryString.get(param);
    return category;
}
export function SetTitle(title, page) {
    let text = GetTitle(title);
    page.title += ` ${text}`;
}
export function GetTitle(sentence) {
    let lines = sentence.split('_');
    let title = '';
    lines[0] = `${lines[0].charAt(0).toUpperCase()}${lines[0].substring(1, lines[0].length)}`;
    for (let line of lines) {
        title += line + ' ';
    }
    return title;
}
export function ListCard(listElement, category, paramsToShow = 'symbol') {
    return `<a href = ../item-details/index.html?symbol=${listElement.symbol}&category=${category}>
        <div class = 'card'>
            <h3>${listElement[paramsToShow]}</h3>
        </div>
    </a>`;
}
export function DetermineTrend(openValue, closeValue) {
    let trend = '';
    if ((openValue - closeValue) < 0) {
        trend = 'down';
    }
    else if ((openValue - closeValue) == 0) {
        trend = 'normal';
    }
    else {
        trend = 'up';
    }
    return trend;
}