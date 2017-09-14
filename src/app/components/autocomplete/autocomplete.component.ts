import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

import { Autocomplete } from './autocomplete';

@Component({
    selector: 'den-autocomplete',
    templateUrl: 'autocomplete.component.html',
    styleUrls: ['autocomplete.component.scss'],
    host: {
        '(document:click)': 'onClick($event)',
      },
})

export class AutocompleteComponent implements OnInit {

    @ViewChild('autocomplete') component: Autocomplete;
    @ViewChild('doropdown') doropdown: ElementRef;

    @Input('data') dataSource: any[];
    @Output() onValueChanged = new EventEmitter();

    public autocomplete: Autocomplete;
    public arrowkeyLocation = 0;
    public value: string = '';
    public _el: ElementRef;
    public result: any[] = [];

    constructor(_el: ElementRef) { }

    ngOnInit() { }

    onKey(event: any) {
        this.autocomplete = new Autocomplete(this.component, event.target.value, this.dataSource);
        this.onValueChanged.emit(this.autocomplete);

        if(event.target.value)
        this.result = this.dataSource.filter((item) => {
            return item.value.indexOf(event.target.value) >= 0;
        }); 

        if(event.target.value == "")
            this.result = [];
    }

    onClick(event: any) {
        if(this.doropdown) {
            if (!this.doropdown.nativeElement.contains(event.target))
                this.result = [];
        }
    }

    selectOption(r) {
        this.value = r.value;
        this.result = [];
    }

    onEneterSelectOption(index) {
        this.value = this.result[index].value;
        this.result = [];
    }
    
    keyDown(event: KeyboardEvent) {
        if (event.keyCode === 40 && this.arrowkeyLocation < this.result.length - 1) {
            // Arrow Down
            this.arrowkeyLocation++;
        } else if (event.keyCode === 38 && this.arrowkeyLocation > 0) {
            // Arrow Up
            this.arrowkeyLocation--;
        }
    }
}