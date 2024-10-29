import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnInit {
  data:any ;

  constructor(private myService: MyServiceService  ) { }

  ngOnInit(): void {
    this.loadCollects()
  }

  loadCollects(): void {
    this.myService.getAllCollects().subscribe({
      next: (response) => {
        this.data = response; // Store the entire response directly
      },
      error: (err) => {
        console.error('Error fetching collects:', err);
        this.data = null; // Set data to null in case of an error
      }
    });
  }
  

}
