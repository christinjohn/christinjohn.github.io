import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private contextRoot: any;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    this.contextRoot = this.getContextRoot();
  }

  //Return the context path of the current url
   getContextRoot() {
        let pathPart = window.location.href;
        let path = pathPart.split('/')[3];
        return path.split('?')[0]; // Strip off the paramaters if present
   }

  interceptError(error) {}

  

}
