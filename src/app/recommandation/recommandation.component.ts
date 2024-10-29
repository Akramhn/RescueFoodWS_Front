import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/services/my-service.service';

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.scss']
})
export class RecommandationComponent implements OnInit {
  recommendationData: any;
  


  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.getAllRecommendations().subscribe(response => {
      this.recommendationData = response;
    });
  }

}
