import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.scss']
})
export class DonComponent implements OnInit {
  data: any;


  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.getAllDon().subscribe(response => {
      this.data = response;
    });
  }

}
