import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | null = null;

    @Output() buyButtonClick = new EventEmitter<void>();

    onProductBuy(event: Event): void {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('Buy product');

        this.buyButtonClick.emit();
    }

    isStarActive(starIndex: number): boolean {
        return (this.product?.rating ?? 0) >= starIndex;
    }
}
