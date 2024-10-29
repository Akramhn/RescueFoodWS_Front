import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: any;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.myService.getAllUsers().subscribe({
      next: (response) => {
        this.userData = response; // Store the entire response
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.userData = null; // Set to null if there's an error
      }
    });
  }

}
