import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, NgOptimizedImage],
    exports: [CardComponent],
})
export class CardModule {}
