import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-redist',
  templateUrl: './redist.component.html',
  styleUrls: ['./redist.component.scss']
})
export class RedistComponent implements OnInit {
  data: any; 

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.loadRedistributions();

  }
  loadRedistributions(): void {
    this.myService.getAllRedistributions().subscribe({
      next: (response) => {
        this.data = response; // Store the entire response
      },
      error: (err) => {
        console.error('Error fetching redistributions:', err);
        this.data = null; // Set to null if there's an error
      }
    });
  }

}
