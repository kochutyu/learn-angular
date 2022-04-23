import { Component, OnInit } from '@angular/core';
import {UserService} from "../../interfaces/user.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    interval(1000).subscribe((value) => {
      this.userService.create({firstName: 'fist name' + value, lastName: 'lastName' + value}).subscribe((user) => {
        console.log('-------');
        console.log(user);
        console.log(this.userService.users);
      });
    });
  }

}
