/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {

    public text: string = '';
    public day: string = '';
    public reminder: boolean = false;
    public showAddTask: boolean = false;
    public subscription: Subscription;

    @Output() onAddTask: EventEmitter<Task> = new EventEmitter;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
    }

    ngOnInit(): void {
    }

    onSubmit(): boolean {
        if (!this.text) {
            alert('Please enter the task');
            return false;
        }

        const newTask: Task = {
            id: null,
            text: this.text,
            day: this.day,
            reminder: this.reminder,
        };

        this.onAddTask.emit(newTask);

        this.text = '';
        this.day = '';
        this.reminder = false;

        return true;
    }

}
