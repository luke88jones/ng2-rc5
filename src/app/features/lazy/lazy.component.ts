import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lazy',
    template: `
        <div>
            <h3>Lazy loaded module</h3>
        </div>
    `
})
export class LazyComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}