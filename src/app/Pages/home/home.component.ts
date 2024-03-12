import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Service/movie-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api : MovieApiService) { }
poster:string='';
plots:string="";
author:string="";
poster1:string='';
plots1:string="";
author1:string="";
poster2:string='';
plots2:string="";
author3:string="";
adventureMovieResult:any=[];
actionMovieResult:any=[];
animationMovieResult:any=[];
comedyMovieResult:any=[];
sciencefictionMovieResult:any=[];
thrillerMovieResult:any=[];

  ngOnInit(): void {

    this.api.Actionmovies().subscribe((result)=>{
      
      this.actionMovieResult = result.Search;
      console.log(this.actionMovieResult,'result#');
      
    })

    this.api.adventureMovie().subscribe((result)=>{
      
      this.adventureMovieResult = result.Search;
      console.log(this.adventureMovieResult,'result#');
    })

    this.api.thrillerMovie().subscribe((result)=>{
      
      this.thrillerMovieResult = result.Search;
      console.log(this.thrillerMovieResult,'result#');
      
    })

    this.api.ComedyMovie().subscribe((result)=>{
      
      this.comedyMovieResult = result.Search;
      console.log(this.comedyMovieResult,'result#');
      
    })

    this.api.SciencefictionMovie().subscribe((result)=>{
      
      this.sciencefictionMovieResult = result.Search;
      console.log(this.sciencefictionMovieResult,'result#');
      
    })

    this.api.AnimatedMovie().subscribe((result)=>{
      
      this.animationMovieResult = result.Search;
      console.log(this.animationMovieResult,'result#');
      
    })

    this.api.bannerData1().subscribe((result)=>{
      this.plots = result.Plot;
      this.poster = result.Poster;
      this.author = result.Actors;
      // console.log(result,'bannerdata#');
    })

    this.api.bannerData2().subscribe((result)=>{
      this.plots1 = result.Plot;
      this.poster1 = result.Poster;
      this.author1 = result.Actors;
      // console.log(result,'bannerdata#');
    })

    this.api.bannerData3().subscribe((result)=>{
      this.poster2 = result.Poster;
      this.plots2  = result.Plot;
      this.author3 = result.Actors;
      // console.log(result,'bannerdata#');
    })
  }

}
