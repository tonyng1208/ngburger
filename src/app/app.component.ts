import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


const jsonData = '../assets/data.json';

export class ItemModel {
  name        ?: string;
  price       ?: string;
  ingredients ?: any;
  isSelected  ?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: Array<ItemModel>;
  public edited = false;

  constructor( private http: Http ) {
    this.items = [];
  }
  ngOnInit() {
    this.http.get(jsonData).subscribe(res=> {
      if (res.json()) {
        this.items = res.json().items;
      }
    });
  }

  doConfirm() {
    this.edited = true;
    setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
    }.bind(this), 3000);
    //alert("Order successful");
  }

}
