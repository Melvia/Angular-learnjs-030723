import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() set template(template: TemplateRef<unknown> | null) {
        this.insertPopup(template);
    }

    @ViewChild('viewport', {static: true, read: ViewContainerRef})
    private readonly viewport: ViewContainerRef | null = null;

    private insertPopup(template: TemplateRef<unknown> | null) {
        this.viewport?.clear();

        if (template) {
            this.viewport?.createEmbeddedView(template);
        }
    }
}
