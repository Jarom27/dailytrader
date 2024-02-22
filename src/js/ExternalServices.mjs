const url = 'https://www.alphavantage.co/query';
const url_twelve = 'https://api.twelvedata.com/';
const api_key = import.meta.env.VITE_TWELVE_API_KEY == undefined ? 'demo' : import.meta.env.VITE_TWELVE_API_KEY;
export async function GetData(category) {
    const response = await fetch(
        `https://api.twelvedata.com/${category}?source=docs`,
    );
    return await response.json();
}
export async function GetSpecificDataItem(item, category) {
    const searchURL = `https://api.twelvedata.com/time_series?symbol=${item}&interval=1min&apikey=74e804c1d18c4170b8100f9ffedfd293&source=docs`;
    const response = await fetch(searchURL);
    console.log(api_key);
    return await response.json()
}