import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService){ }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration successful');
    }, error => {
      this.alertify.error('Invalid - Contact support');
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.message('cancelled');
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