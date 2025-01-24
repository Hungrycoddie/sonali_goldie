import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


}
