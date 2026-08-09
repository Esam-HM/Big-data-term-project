<<<<<<< HEAD

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
=======
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  @Input() isVisible: boolean = false;
  @Input() message: string = "";
}
>>>>>>> 8dcf84e53af6baab79ddf31d0b2f03c4a4cdf05b
