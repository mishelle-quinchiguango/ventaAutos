import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInterceptorService implements HttpInterceptor{

  usuario:string="Mishelle Quinchiguango";
  clave:string="user-request";
constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let clonar=req.clone({
    headers:req.headers.append(this.clave,this.usuario)
  })
  return next.handle(clonar);
  
}

}
