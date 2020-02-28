import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './../core/services/shopping.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    products;

    constructor(private shoppingService: ShoppingService) { }

    ngOnInit() {
        this.shoppingService.getProducts().subscribe(products => this.products = products);
    }
}
