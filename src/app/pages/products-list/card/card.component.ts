import {Component} from '@angular/core';
import {productMock} from '../../../shared/products/product.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    product = productMock;

    onClick(event: Event): void {
        event.stopPropagation();
    }
}
