import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService){ }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration successful');
    }, error => {
      console.log(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}


// angular service used to communicate with api
// every component or service has only one task
// provides logic for html view
// components should be simple as possible and not too bulky
// services can cut down on duplicate code
// can inject them into components
// ng-if is good af
// output properties emit events
// emits a boolean value: false