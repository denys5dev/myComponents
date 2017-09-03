import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

import { Autocomplete } from './autocomplete';

@Component({
    selector: 'den-autocomplete',
    templateUrl: 'autocomplete.component.html',
    styleUrls: ['autocomplete.component.scss']
})

export class AutocompleteComponent implements OnInit {

    @Input() dataSource: any[];
    @Output() onValueChanged: EventEmitter<any>;
    @ViewChild('autocomplete') component: Autocomplete;

    public autocomplete: Autocomplete;
    public _el: ElementRef;

    constructor(_el: ElementRef) {
        this.autocomplete = new Autocomplete(this.component, null, []);
        this.onValueChanged = new EventEmitter<any>();
     }

    ngOnInit() { }

    onKey(event: any) {
        this.autocomplete.value = event.target.value;
        this.autocomplete.component = this.component;
        this.autocomplete.dataSource = this.dataSource;

        this.onValueChanged.emit(this.autocomplete);
    }
}