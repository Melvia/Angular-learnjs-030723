import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from '../directions';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<number>();

    topPosition = 0;

    @HostListener('scroll', ['$event.target'])
    onScroll(target: HTMLElement) {
        const {scrollHeight, scrollTop, clientHeight} = target;
        const direction = this.topPosition - scrollTop >= 0 ? LoadDirection.up : LoadDirection.down;

        const topOffset = scrollTop;
        const bottomOffset = scrollHeight - clientHeight - scrollTop;

        if (
            (direction === LoadDirection.up && topOffset <= 100) ||
            (direction === LoadDirection.down && bottomOffset <= 100)
        ) {
            this.loadData.emit(direction);
        }

        this.topPosition = scrollTop;
    }
}
