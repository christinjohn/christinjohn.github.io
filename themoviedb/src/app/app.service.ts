import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private apikey = '3a94078fb34b772a31d9a1348035bed7';
  private baseURL = 'https://api.themoviedb.org/3/';
  
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private httpService: HttpClient) {
    this.contextRoot = this.getContextRoot();
  }

  //Return the context path of the current url
  getContextRoot() {
        let pathPart = window.location.href;
        let path = pathPart.split('/')[3];
        return path.split('?')[0]; // Strip off the paramaters if present
  }

  interceptError(error) {}

  get(inURL, config = undefined) {
    let options;
    if (config){
        options = config;
    } else {
        options = httpOptions;
    }

    let action = this.httpService.get(inURL, options);
    return new Promise((resolve, reject) => {
        action.subscribe(
            response => resolve(response),
            (error) => {
                this.interceptError(error);
                reject(error);
            }
        );
    });
  }

  getPopular() {
    let url = this.baseURL + 'discover/movie?api_key=' + this.apikey + '&sort_by=popularity.desc&language=en-US'
    return this.get(url);
  }

  getTrending() {
    let url = this.baseURL + 'trending/all/day?api_key=' + this.apikey + '&sort_by=popularity.desc&language=en-US'
    return this.get(url);
  }

  getNewest() {

  }

  getTopRated() {

  }

}
