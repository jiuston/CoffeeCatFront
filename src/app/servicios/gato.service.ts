import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gato } from '../modelos/gato';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { GatoOutputDTO } from '../modelos/gatoOutputDTO';

@Injectable({
  providedIn: 'root'
})
export class GatoService {
 
  private gatosUrl = 'https://coffee-cat.herokuapp.com/gatos'; 
  private gatos? : Observable<Gato[]>;

  getGatos(): Observable<Gato[]>{
    if(this.gatos==undefined){
      this.gatos=this.http.get<Gato[]>(this.gatosUrl,this.createHttpOptions());
  }
    return this.gatos;
  }
  getGato(id: string | null) : Observable<Gato>{
    if (id) {
      return this.http.get<Gato>(`${this.gatosUrl}/${id}`, this.createHttpOptions()).pipe(catchError(this.handleError<Gato>(`Fallo al coger el gato ${id}`)));  
    }else{
      return of();
    }
  }

  postGato(formData: FormData) {
    
    this.http.post(`${this.gatosUrl}`,formData,this.createHttpOptionsMultipart()).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });   
  }

  editGato(gato: Gato) :Observable<Gato>{
    //return this.http.post<Gato>('/add/', gato, this.createHttpOptions()).pipe(catchError(this.handleError<Gato>(`Fallo al editar el gato ${gato.id}`)));
    return this.http.put<Gato>(`${this.gatosUrl}/${gato.id}?nombre=${gato.nombre}&fecha_nacimiento=${gato.fecha_nacimiento}&sexo=${gato.sexo}&historia=${gato.historia}&adoptado=${gato.adoptado}`,null, this.createHttpOptions()).pipe(catchError(this.handleError<Gato>(`Fallo al editar el gato ${gato.id}`)));   
  }

  getToken(){
    if(this.userService.getToken()){
      return;
    }else{
      this.router.navigate(['/login']);
    }
  }

  createHttpOptionsMultipart() {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization' : 'Bearer '+this.userService.getToken()})
    };
    return httpOptions;
}

  createHttpOptions() {
      this.getToken();
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.userService.getToken()})
      };
      return httpOptions;
  }
  
  constructor(private http: HttpClient, private router:Router, private userService: UserService) { }

  private handleError<T>(fallo: string, result? :T ) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}

}
