import { MyDataService } from './../../services/my-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  myData: any;
  myData$: any;
  products: any[] = [];

  constructor(private MyDataService: MyDataService) { }

  ngOnInit(): void {
    this.MyDataService
      .getData()
      .subscribe((data) => {
        this.myData = data;
        console.log(this.myData)

        this.products = this.myData.products;
        console.log(this.products);
      });
  }

}
