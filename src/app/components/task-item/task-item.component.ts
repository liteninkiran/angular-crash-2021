/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {

    @Input() task!: Task;

    @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter;
    @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;

    public faTimes = faTimes;

    constructor() { }

    ngOnInit(): void {
    }

    deleteTask(): boolean {
        this.onDeleteTask.emit(this.task);
        return true;
    }

    toggleReminder(): boolean {
        this.onToggleReminder.emit(this.task);
        return true;
    }

}
