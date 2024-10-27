import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private fusekiUrl = 'http://localhost:3030/ds/query';

  constructor(private http: HttpClient) { }

  getAllData(limit: number = 10): Observable<any> {
    const sparqlQuery =
    "PREFIX ns: <http://www.semanticweb.org/user/ontologies/2024/8/untitled-ontology-6#> " +
    "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> " +
    "SELECT ?beneficiaire ?householdSize ?address WHERE { " +
    "  OPTIONAL { ?beneficiaire ns:householdSize ?householdSize . } " +
    "  OPTIONAL { ?beneficiaire ns:address ?address . } " +
    "}";


    const params = new HttpParams()
        .set('query', sparqlQuery)
        .set('output', 'json'); // Ensure you specify output format

    return this.http.get<any>(this.fusekiUrl, { params });
}
}
