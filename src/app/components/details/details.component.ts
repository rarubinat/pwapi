import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/model.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  user!: Users;
  Spinner: boolean = true;
  openPanel: boolean = false;
  buttonText: string = 'Show all details';

  constructor(
    private UsersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log('identifier --> ', identifier);

    this.UsersService.getUserById(identifier).subscribe({
      error:(err: any) => {
        console.log(err);
        this.Spinner = false;
      },
      next:(user) => {
        this.Spinner = false;
        if(!user){
          return this.router.navigateByUrl('/');
        }
        this.user = Object.values(user)[0];
        return '';
      },
    });
  }
  togglePanel() {
    this.openPanel = !this.openPanel;
    if (this.openPanel == true) {
      this.buttonText = 'Hide details';
    } else {
      this.buttonText = 'Show all details';
    }
  }
}
