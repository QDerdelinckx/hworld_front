import { Component, OnInit } from '@angular/core';
import { itemModel } from 'src/app/_models/item';
import { ItemService } from 'src/app/_services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  imgUrl: string;
  allItems: itemModel[];

  constructor(
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.imgUrl = "../../../assets/images/";
    this.itemService.context$.subscribe(list => {
      this.allItems = list;
    });
    this.itemService.refresh();
  }

}
