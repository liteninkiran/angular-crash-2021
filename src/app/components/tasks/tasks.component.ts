import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
})

export class TasksComponent implements OnInit {

    public tasks: Task[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    }

    deleteTask(task: Task): boolean {
        this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
        return true;
    }

    toggleReminder(task: Task): boolean {
        task.reminder = !task.reminder;
        this.taskService.updateTask(task).subscribe();
        return true;
    }

    addTask(task: Task): boolean {
        this.taskService.addTask(task).subscribe((tk) => this.tasks.push(tk));
        return true;
    }
}
