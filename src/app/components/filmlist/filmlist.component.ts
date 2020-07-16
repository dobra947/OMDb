import {Component, OnInit} from '@angular/core';
import {Film} from "../../interfaces/film";
import {Filmsearch} from "../../interfaces/filmsearch";

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.scss']
})
export class FilmlistComponent implements OnInit {

  public totalResults = 54;
  public filmlist = [
    <Filmsearch>{
      "Title": "To All the Boys: P.S. I Still Love You",
      "Year": "2020",
      "imdbID": "tt9354842",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjMwNDQ4NzMtOThmZi00NmMyLThkMWItMTA3MTg2YjdiZDRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    <Filmsearch><Filmsearch>{
      "Title": "All the Bright Places",
      "Year": "2020",
      "imdbID": "tt3907584",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2FkY2E1OTgtYmFhYi00NzczLThjYjktNDljN2ZiZGY4OGIzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    <Filmsearch>{
      "Title": "All Day and a Night",
      "Year": "2020",
      "imdbID": "tt3993886",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjBlNGNjOWUtOWE3NC00OTU3LTk2ZmQtZTIyYjc0NDgwMjM1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    <Filmsearch>{
      "Title": "All Elite Wrestling: Revolution",
      "Year": "2020",
      "imdbID": "tt11440100",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjY0YjUwYjctMjJhYS00NTBhLWJhODctODk4ZWQ2MDkxZTUzXkEyXkFqcGdeQXVyMzQwNDk2ODM@._V1_SX300.jpg"
    },
    <Filmsearch>{
      "Title": "Celia Pacquola: All Talk",
      "Year": "2020",
      "imdbID": "tt11952742",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDJmMGQyZGItMWIxZC00NzZjLThjMGItYjNjM2VlMTg2NjgzXkEyXkFqcGdeQXVyODg3MjQ0OTg@._V1_SX300.jpg"
    },
    <Filmsearch>{
      "Title": "All the Dead Ones",
      "Year": "2020",
      "imdbID": "tt8845322",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzcyYTI4MTctYWUxOC00ZGRlLThmMjgtOTNjZmRhOTE3ZTAyXkEyXkFqcGdeQXVyMjM4MTIyMjc@._V1_SX300.jpg"
    },
    <Filmsearch>{
      "Title": "Bring Back the Bush: Where Did All the Pubic Hair Go?",
      "Year": "2020",
      "imdbID": "tt11697840",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTAxOTljMDYtMGQwNi00YWViLTk0NDYtOGY0NjgyOGQ3Mjc1XkEyXkFqcGdeQXVyMzkyNTYxMjE@._V1_SX300.jpg"
    },
    <Filmsearch>{
      "Title": "All That Matters",
      "Year": "2020",
      "imdbID": "tt11721708",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDJkNWYxZGItOTE3NS00OTMxLTg0ZTItYzA1MTY2MTVhY2FjXkEyXkFqcGdeQXVyMTEwNzgzNjI2._V1_SX300.jpg"
    },
    <Filmsearch>{
      "Title": "Snow White: The Fairest of Them All",
      "Year": "2020",
      "imdbID": "tt11738110",
      "Type": "movie",
      "Poster": "N/A"
    },
    <Filmsearch>{
      "Title": "All Elite Wrestling: Double or Nothing",
      "Year": "2020",
      "imdbID": "tt11738802",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTNmNzIzYjgtZWFjOC00M2Y0LWE3ZjMtNGYzNGUwZDgyNjk0XkEyXkFqcGdeQXVyMzQwNDk2ODM@._V1_SX300.jpg"
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
