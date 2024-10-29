import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-livreure',
  templateUrl: './livreure.component.html',
  styleUrls: ['./livreure.component.scss']
})
export class LivreureComponent implements OnInit {
  livreurData: any;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.loadLivreurs();
  }

  loadLivreurs(): void {
    this.myService.getAllLivreurs().subscribe({
      next: (response) => {
        this.livreurData = response;
        console.log(this.livreurData, "message")
      },
      error: (err) => {
        console.error('Error fetching livreurs:', err);
        this.livreurData = null;
      }
    });
  }

}
