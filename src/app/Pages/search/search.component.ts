import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api :MovieApiService) { }
  show:boolean=false;
  search ="";
  Solution:any=[];

  searchContent(){

    // console.log(this.search);
    this.api.searchItem(this.search).subscribe((result)=>{
      console.log(result.Error);
       if(result.Error=='Movie not found!'){
        this.show=true;
       }
       else{
         this.Solution = result.Search;
       }
    })
    this.search="";
  }
  ngOnInit(): void {
  }

}
