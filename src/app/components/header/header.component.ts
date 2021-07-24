/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    public title = 'Task Tracker';
    public showAddTask: boolean = false;
    public subscription: Subscription;

    constructor(private uiService: UiService, private router: Router) {
        this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
    }

    ngOnInit(): void {
    }

    public toggleAddTask(): boolean {
        this.uiService.toggleAddTask();
        return this.showAddTask;
    }

    public hasRoute(route: string): boolean {
        return this.router.url === route;
    }
}
