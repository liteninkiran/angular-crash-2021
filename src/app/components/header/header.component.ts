import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    public title = 'Task Tracker';

    public colour: string = 'blue';
    public text: string = 'Start';

    constructor() { }

    ngOnInit(): void {
    }

    public toggleAddTask() {
        alert('Toggle');
    }
}
