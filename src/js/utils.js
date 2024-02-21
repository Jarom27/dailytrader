import.meta.env.RAPID_API_KEY;
const url = 'https://www.alphavantage.co/query';
export async function GetData(category) {
  const response = await fetch(
    `https://api.twelvedata.com/${category}?source=docs`,
  );
  return await response.json();
}
export async function GetSpecificDataItem(item, duration, interval = 5) {
  const searchURL = `${url}?function=${duration}&symbol=${item}&interval=${interval}min`;
  const response = fetch(searchURL);
}
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
  return `<a href = ../item-details/index.html?item-symbol=${listElement.symbol}&category=${category}>
        <div class = 'card'>
            <h3>${listElement[paramsToShow]}</h3>
        </div>
    </a>`;
}
