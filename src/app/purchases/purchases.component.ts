import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases: any = null;

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.getPurchases().subscribe((res: any) => {
      this.purchases = res.data;
    });
  }
}
