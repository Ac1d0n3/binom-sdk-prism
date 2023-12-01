import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPrismDirective } from '@binom/sdk-prism/core';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BnPrismDirective, BnPrismBoxComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  toggle:boolean = true;
  language:string = 'typescript';
  code = 
`import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  toggle:boolean = true;
  code = ''
}`;
}
