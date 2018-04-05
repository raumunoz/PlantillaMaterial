import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/do';



@Injectable()
export class InterceptorOne implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq=req.clone({headers: req.headers.set('Acces-Control-Allow-Origin','https://api.giphy.com')});
    return next.handle(req);
  }
}

@Injectable()
export class InterceptorTwo implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq=req.clone({headers: req.headers.set('Acces-Control-Allow-Origin','https://worldclockapi.com')});
    return next.handle(req);
    
  }
}


@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorOne, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorTwo, multi: true },
  ]
})
export class InterceptorModule { }