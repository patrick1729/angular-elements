import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
    <button (click)="handleClick($event)">{{ label }}</button>
  `,
    styles: [],
    encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnChanges {

    @Input() label = '';
    @Output() action = new EventEmitter<number>();

    private numberOfClicks = 0;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    handleClick(event) {
        this.numberOfClicks++;
        this.action.emit(this.numberOfClicks);
    }
}



