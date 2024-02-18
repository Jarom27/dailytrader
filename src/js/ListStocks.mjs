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
    GetList() {
        return this.list;
    }
    GetCategory() {
        return this.category;
    }
}