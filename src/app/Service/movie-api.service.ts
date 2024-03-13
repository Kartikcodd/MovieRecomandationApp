import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor( private http : HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";

  apiKey ='419aca37369ac99369f842c58a814047'

  bannerData1():Observable<any>{
    return this.http.get(`https://www.omdbapi.com/?t=john wick&apikey=75f44973`)
  }

  bannerData2():Observable<any>{
    return this.http.get(`https://www.omdbapi.com/?t=oppenheimer&apikey=75f44973`)
  }
  bannerData3():Observable<any>{
    return this.http.get(`https://www.omdbapi.com/?t=gran turismo&apikey=75f44973`)
  }

  adventureMovie():Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?apikey=75f44973&s=adventure&y=2021-2023`)
  }
  Actionmovies():Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?apikey=75f44973&s=action&y=2021-2023`)
  }
  thrillerMovie():Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?apikey=75f44973&s=thriller&y=2021-2023`)
  }
  AnimatedMovie():Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?apikey=75f44973&s=animated&y=2021-2023`)
  }
  ComedyMovie():Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?apikey=75f44973&s=comedy&y=2021-2023`)
  }
  SciencefictionMovie():Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?apikey=75f44973&s=sci-fi&y=2021-2023`)
  }

  searchItem(item:string):Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?apikey=75f44973&s=${item}&y=2021-2023`)
  }
}
