import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Card click');
    }

    onCardBuyButtonClick(product: IProduct) {
        // eslint-disable-next-line no-console
        console.log('Товар:', product?.name, 'Цена:', product?.price, 'рейтинг:', product?.rating);
    }

    productList = productsMock;
}
