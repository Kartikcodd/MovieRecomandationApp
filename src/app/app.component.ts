import { Component,HostListener, OnInit } from '@angular/core';
import { MovieApiService } from './Service/movie-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieApp';

constructor(private api : MovieApiService){}
  navBg:any;

  @HostListener('window:scroll') onScroll(){
 
    if(document.body.scrollTop >0 || document.documentElement.scrollTop > 0){
      this.navBg = {
        'background-color':'#000000'
      }
    }else{
      this.navBg = {
        'background-color':'transparent'
      }
    }
  }

  ngOnInit(): void {
    // this.api.bannerApiData().subscribe((result)=>{
    //   console.log(result);
    // })
  }
  
}
