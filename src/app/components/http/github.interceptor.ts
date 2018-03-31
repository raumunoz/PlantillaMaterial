import{ Injectable } from '@angular/core';
import{ HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class GithubInterceptor implements HttpInterceptor{
    //se usa una token para autorzación 
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        const authReq=req.clone({
            /*headers:req.headers.set('Authorization','token ')
            //33867c0d3d464777ae7815c397e9cab0 //giphy
            //cf36328072e4500734b99599f266b054e065cd3a github*/
        });
        return next.handle(authReq);
    }
}

