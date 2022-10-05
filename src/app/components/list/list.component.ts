import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/model.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: Users[] = [];
  Spinner: boolean = true;

  constructor(private UsersService: UsersService) {}

  ngOnInit(): void {
    this.UsersService.getAllusers().subscribe({
      error: (err: any) => {
        console.log(err);
        this.Spinner = false;
      },
      next: (users) => {
        this.users = Object.values(users)[0];
        this.Spinner = false;
      },
    });
  }
}
