import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private items = [];
  private response;
  private imageDBBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService.getPopular().then(result => {
      this.items = result["results"];
    });
  }

  fetchList(type) {
    switch(type) {
      case 'popular':
        this.appService.getPopular().then(result => {
          this.items = result["results"];
        });
        break;
      case 'trending':
        this.appService.getTrending().then(result => {
          this.items = result["results"];
        });
        break;
      case 'newest':
        // this.appService.getNewest().then(result => {
        //   this.items = result["results"];
        // });
        break;
      case 'toprated':
        // this.appService.getTopRated().then(result => {
        //   this.items = result["results"];
        // });
        break;
    }

  }
}
