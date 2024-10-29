import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {
  data: any ;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.loadLivraisons();

  }

  loadLivraisons(): void {
    this.myService.getAllLivraisons().subscribe({
      next: (response) => {
        this.data = response; // Store the entire response
      },
      error: (err) => {
        console.error('Error fetching livraisons:', err);
        this.data = null; // Set to null if there's an error
      }
    });
  }

}
