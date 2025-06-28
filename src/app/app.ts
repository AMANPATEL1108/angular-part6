import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part6';

  // userName = signal('Aman');

  // count = signal(0);

  // displayHeading = false;

  // constructor() {
  //   effect(() => {
  //     if (this.count() == 2) {
  //       this.displayHeading = true;
  //       setTimeout(() => {
  //         this.displayHeading = false;
  //       }, 5000);
  //     } else {
  //       this.displayHeading = false;
  //     }
  //   });
  // }

  // toggleValue() {
  //   this.count.set(this.count() + 1);
  // }

  //contextual variables

  // users = ['aman', 'dev', 'asd', 'asdd', 'sdsde', 'dfsdf', 'sdfsd'];
  // users = [];

  //two Way Binding

  // name = '';

  // changeName(event: Event) {
  //   const val = (event.target as HTMLInputElement).value;
  //   this.name = val;
  // }

  //TO-DO List

  //   task = '';
  //   taskList: { id: number; task: string }[] = [];

  //   addtask() {
  //     this.taskList.push({ id: this.taskList.length + 1, task: this.task });
  //     console.log(this.taskList);
  //     this.task = '';
  //   }

  //   deletetask(taskId: number) {
  //     this.taskList = this.taskList.filter((item) => item.id != taskId);
  //   }
  //

  //Dynamic Styling

  // color = 'red';
  // fontSize = '80';
  // headingSizeBig = '40px';
  // headingSizeSmall = '10px';

  // zoom = false;

  // updateHeadingSize() {
  //   this.zoom = !this.zoom;
  // }

  // <!-- //Directives -->

  // show = true;

  // students = ['aman', 'dev', 'patel', 'qwe', 'asd', 'asqw'];

  // studetsData = [
  //   { name: 'aman', age: '21', email: 'aman21W@gmail.com' },
  //   { name: 'dev', age: '22', email: 'aman23W@gmail.com' },
  //   { name: 'fr', age: '23', email: 'amanW32@gmail.com' },
  //   { name: 'as', age: '24', email: 'aman34W@gmail.com' },
  // ];

  // logining = false;

  // block = 0;

  // updateBlock() {
  //   this.block++;
  // }

  color = 'green';

  changeColor(val: string) {
    this.color = val;
  }
}
