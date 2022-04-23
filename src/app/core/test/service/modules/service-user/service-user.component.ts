import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-service-user',
  templateUrl: './service-user.component.html',
  styleUrls: ['./service-user.component.scss']
})
export class ServiceUserComponent {
  createUserForm: FormGroup;
  updateUserForm: FormGroup;
  deleteUserForm: FormGroup;

  users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar
  ) {
    this.users$ = userService.users$.asObservable();
    this.createUserForm = fb.group({
      firstName: fb.control('', [Validators.required]),
      lastName: fb.control('', [Validators.required])
    });
    this.updateUserForm = fb.group({
      id: fb.control('', [Validators.required]),
      firstName: fb.control('', [Validators.required]),
      lastName: fb.control('', [Validators.required])
    });
    this.deleteUserForm = fb.group({
      id: fb.control('', [Validators.required])
    });
  }

  createUser() {
    const data = this.createUserForm.getRawValue();
    this.userService.create(data).subscribe(() => {
      this.matSnackBar.open('Users has been created!', 'Create');
      this.createUserForm.reset();
    });
  }

  updateUser() {
    const data = this.updateUserForm.getRawValue();
    this.userService.update(data.id, data).subscribe(() => {
      this.matSnackBar.open('Users has been updated!', 'Update');
      this.updateUserForm.reset();
    });
  }

  deleteUser() {
    const data = this.deleteUserForm.getRawValue();
    this.userService.delete(data.id).subscribe(() => {
      this.matSnackBar.open('Users has been deleted!', 'Delete');
      this.deleteUserForm.reset();
    });
  }

}
