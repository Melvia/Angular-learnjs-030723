import {
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PaginationContextInterface} from './pagination-context.interface';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges {
    @Input() appPaginationOf: T[] | undefined | null;

    @Input() appPaginationChankSize: number | undefined | null;

    private readonly currentIndex$ = new BehaviorSubject<number>(0);

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<PaginationContextInterface<T>>,
    ) {}

    ngOnChanges({appPaginationOf}: SimpleChanges): void {
        if (appPaginationOf) {
            this.updateView();
        }
    }

    ngOnInit(): void {
        this.listenCurrentIndexChange();
    }

    private updateView() {
        const hasViewItems = this.appPaginationOf?.length;

        if (!hasViewItems) {
            this.viewContainerRef.clear();

            return;
        }

        this.currentIndex$.next(0);
    }

    private listenCurrentIndexChange() {}

    private next() {
        const nextIndex = this.currentIndex$.value + 1;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const newIndex = nextIndex < this.appPaginationOf!.length ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const lastIndex = this.appPaginationOf!.length - 1;
        const newIndex = previousIndex >= 0 ? previousIndex : lastIndex;

        this.currentIndex$.next(newIndex);
    }
}
