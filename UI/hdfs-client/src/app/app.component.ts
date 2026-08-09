<<<<<<< HEAD
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

declare var particlesJS: any;

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    particlesJS.load("particles-js", "particles.json", () => {
      console.log("callback - particles loaded");
    });
  }

}
=======
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    particlesJS.load("particles-js", "particles.json", () => {
      console.log("callback - particles loaded");
    });
  }

}
>>>>>>> 8dcf84e53af6baab79ddf31d0b2f03c4a4cdf05b
