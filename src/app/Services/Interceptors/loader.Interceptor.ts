import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.Interceptor';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderServ: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Start ==> show Loader
    this.loaderServ.show();
    return next.handle(req).pipe(
      // End ==> hide Loader
      finalize(() => {
        this.loaderServ.hide();
      })
    );
  }
}

// Export LoaderService separately
export { LoaderService };
