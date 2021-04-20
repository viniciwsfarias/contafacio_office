import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cert{
  id: string;
  certificados: string;
  cnpj: string;
  email: string
  vencimento: Date;
  situacao: string;
}

@Injectable({
  providedIn: 'root'
})
export class CertiService {
  private url = "http://contafacio.com.br/api/certificados.php";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cert]>(this.url);
  }
  remove(id: any){
    return this.http.delete(this.url + '?id=' + id);
    
  }
  create(cert: Cert){
    return this.http.post(this.url, cert);
  }
  getId(id: any, email: any){
    return this.http.get(this.url + '?id=' + id).toPromise();
  }
}
