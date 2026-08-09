
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    imports: [],
    templateUrl: './spinner.component.html',
    styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  @Input() isVisible: boolean = false;
  @Input() message: string = "";
}
