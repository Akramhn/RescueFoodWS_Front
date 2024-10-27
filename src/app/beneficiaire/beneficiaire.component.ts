import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.scss']
})
export class BeneficiaireComponent implements OnInit {
  constructor(private fusekiDataService: MyServiceService ) { }
  data: any;

  ngOnInit() {
    this.fusekiDataService.getAllData().subscribe(
      (responseData) => {
        this.data = responseData;
      },
      (error) => console.error('Error fetching data from Fuseki', error)
    );
  }

}
