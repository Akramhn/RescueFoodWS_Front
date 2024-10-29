import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.scss']
})
export class BeneficiaireComponent implements OnInit {
  constructor(private myService: MyServiceService) { }
  data: any;

  ngOnInit() {
    this.loadBeneficiaires();

  }

  loadBeneficiaires(): void {
    this.myService.getBeneficiaires().subscribe({
      next: (response) => {
        this.data = response; // Store the entire response
      },
      error: (err) => {
        console.error('Error fetching beneficiaires:', err);
        this.data = null; // Set to null if there's an error
      }
    });
  }

}
