import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private ENDPOINT = 'http://localhost:9000/nourriture';
  private ENDPOINT1 = 'http://localhost:9000/don';
  private RECOMMENDATION_ENDPOINT = 'http://localhost:9000/recommandation';
  private COLLECT_ENDPOINT = 'http://localhost:9000/collect';
  private apiUrl = 'http://localhost:9000/redistribution';
  private beneficiaire = 'http://localhost:9000/beneficiaire';
  private livraison = 'http://localhost:9000/livraison';
  private livreurApiUrl = 'http://localhost:9000/livreur';
  private user = 'http://localhost:9000/user';





  constructor(private http: HttpClient) {

    
   }

   createFood(foodItem: any): Observable<any> {
    return this.http.post(`${this.ENDPOINT}`, foodItem);
  }

  getAllFood(): Observable<any[]> {
    return this.http.get<any[]>(`${this.ENDPOINT}`);
  }


  updateFood(updatedFoodItem: any): Observable<any> {
    return this.http.put(`${this.ENDPOINT}`, updatedFoodItem);
  }

  deleteFood(id: string): Observable<any> {
    return this.http.delete(`${this.ENDPOINT}/${id}`);
  }

  createDon(donItem: any): Observable<any> {
    return this.http.post(`${this.ENDPOINT1}`, donItem);
  }

  getAllDon(): Observable<any[]> {
    return this.http.get<any[]>(`${this.ENDPOINT1}`);
  }

  updateDon(updatedDonItem: any): Observable<any> {
    return this.http.put(`${this.ENDPOINT1}`, updatedDonItem);
  }

  deleteDon(id: string): Observable<any> {
    return this.http.delete(`${this.ENDPOINT1}/${id}`);
  }

  createRecommendation(recommendation: any): Observable<any> {
    return this.http.post(`${this.RECOMMENDATION_ENDPOINT}`, recommendation);
  }

  getAllRecommendations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.RECOMMENDATION_ENDPOINT}`);
  }

  updateRecommendation(updatedRecommendation: any): Observable<any> {
    return this.http.put(`${this.RECOMMENDATION_ENDPOINT}`, updatedRecommendation);
  }

  deleteRecommendation(id: string): Observable<any> {
    return this.http.delete(`${this.RECOMMENDATION_ENDPOINT}/${id}`);
  }

  createCollect(collect: any): Observable<any> {
    return this.http.post(`${this.COLLECT_ENDPOINT}`, collect);
  }

  getAllCollects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.COLLECT_ENDPOINT}`);
  }

  updateCollect(updatedCollect: any): Observable<any> {
    return this.http.put(`${this.COLLECT_ENDPOINT}`, updatedCollect);
  }

  deleteCollect(id: string): Observable<any> {
    return this.http.delete(`${this.COLLECT_ENDPOINT}/${id}`);
  }

  getAllRedistributions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/redistributions`);
  }

  createRedistribution(redistributionData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/redistributions`, redistributionData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateRedistribution(id: string, redistributionData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/redistributions/${id}`, redistributionData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteRedistribution(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/redistributions/${id}`);
  }

0
  getBeneficiaires(): Observable<any> {
    return this.http.get<any>(this.beneficiaire);
  }


  getAllLivraisons(): Observable<any> {
    return this.http.get<any>(`${this.livraison}`);
  }


  createLivraison(livraison: any): Observable<any> {
    return this.http.post<any>(`${this.livraison}`, livraison, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateLivraison(id: string, livraison: any): Observable<any> {
    return this.http.put<any>(`${this.livraison}/${id}`, livraison, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteLivraison(id: string): Observable<any> {
    return this.http.delete<any>(`${this.livraison}/${id}`);
  }

  getAllLivreurs(): Observable<any> {
    return this.http.get<any>(`${this.livreurApiUrl}`);
  }


  createLivreur(livreur: any): Observable<any> {
    return this.http.post<any>(`${this.livreurApiUrl}`, livreur, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateLivreur(id: string, livreur: any): Observable<any> {
    return this.http.put<any>(`${this.livreurApiUrl}/${id}`, livreur, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteLivreur(id: string): Observable<any> {
    return this.http.delete<any>(`${this.livreurApiUrl}/${id}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.user}/users`); 
  }


}
