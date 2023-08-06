import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(products: IProduct[], searchName: string): IProduct[] {
        const filterProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchName.toLowerCase()),
        );

        return filterProducts;
    }
}
