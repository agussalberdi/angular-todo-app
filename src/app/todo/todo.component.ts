import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ToDoService } from './services/todo.service';
=======
import { ToDoService } from './shared/services/todo.service';
>>>>>>> 2b05f96a752e099bcbf65524d0d7a8d91abec70c

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class ToDoComponent implements OnInit {
    toDoListArray: any[];

    constructor(private todoService: ToDoService) {}

    ngOnInit() {
        this.todoService.getToDoList().snapshotChanges()
            .subscribe(item => {
                this.toDoListArray = [];
                item.forEach(elem => {
                    let x = elem.payload.toJSON();
                    x['$key'] = elem.key;
                    this.toDoListArray.push(x);
                });

                this.toDoListArray.sort((a, b) => {
                    return a.isChecked - b.isChecked;
                });
            });
    }

    onAdd(itemTitle: any) {
        this.todoService.addTitle(itemTitle.value);
        itemTitle.value = null;
    }

    alterCheck($key: string, isChecked: boolean) {
        this.todoService.checkOrUncheckTitle($key, isChecked);
    }

    onRemove($key: string) {
        this.todoService.removeTitle($key);
    }

    renderIcon(isChecked: boolean) {
        return isChecked ? 'check_circle_outline' : 'panorama_fish_eye';
    }
}
