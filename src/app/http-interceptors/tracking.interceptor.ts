import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()
export class TrackingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const started: number = Date.now();
    let ok: string;


    console.log('request made at ' + started.toLocaleString());

    // extend server response observable with logging
    return next.handle(req).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        next: (event) =>
          (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        // Operation failed; error as an HttpErrorResponse
        error: (_error) => (ok = 'failed'),
      }),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const log = `${req.method} "${req.urlWithParams}"
            ${ok} in ${elapsed} ms.`;
        console.log(log);
      })
    );
  }
}
