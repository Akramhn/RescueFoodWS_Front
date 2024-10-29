import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-nourriture',
  templateUrl: './nourriture.component.html',
  styleUrls: ['./nourriture.component.scss']
})
export class NourritureComponent implements OnInit {
  data: any;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    console.log(this.data ,"this is data" )
    this.fetchNourritureData();

  }

  fetchNourritureData(): void {
    this.myService.getAllFood().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

}
