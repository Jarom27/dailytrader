export class ListStocks {
    constructor(category) {
        this.category = category;
        this.list = [];
    }
    SetList(data) {
        data.forEach(elem => {
            this.list.push(elem);
        });
    }
    FilterListByParam(nameParam, valueParam) {
        if (nameParam == '' && valueParam == '')
            return this.list;
        return this.list.filter(element => element[nameParam] == valueParam);
    }
    GetList() {
        return this.list;
    }
    GetCategory() {
        return this.category;
    }
}