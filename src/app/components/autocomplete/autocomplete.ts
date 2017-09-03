export class Autocomplete {

    component: any;
    value: any;
    dataSource: any;

    constructor(component, value, dataSource) {
        this.component = component;
        this.value = value;
        this.dataSource = dataSource;
    }
}