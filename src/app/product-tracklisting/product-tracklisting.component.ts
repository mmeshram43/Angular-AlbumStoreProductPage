import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from 'app/product-list/product-list.component';
import { Album } from "../album";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  constructor( private _productService :ProductService) { }

  albumInfo : Album ;

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response )
  }

}
