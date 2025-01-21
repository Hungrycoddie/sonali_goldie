import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  firstName: string = '';
  lastName: string = '';




  onSubmit() {
    console.log( 'first Name:', this.firstName);
    console.log('last Name:',this.lastName)


    // console.log('First Name: ' + this.firstName);
    // console.log('Last Name: ' + thi  s.lastName);
  }
}
