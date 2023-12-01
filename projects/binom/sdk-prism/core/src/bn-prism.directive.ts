import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, Input, HostListener} from '@angular/core';
import { BnPrismService } from './bn-prism.service';

@Directive({
  selector: '[bnPrismCode]',
  standalone:true,
})
export class BnPrismDirective {
  @HostListener('keydown') onInput() {
    this.doToggle();

  }
  @Input() language: string = 'javascript';

  private _toggle: boolean = true;
  get toggle():boolean {return this._toggle}
  @Input() set toggle(value:BooleanInput){
    if(this.toggle !==  coerceBooleanProperty(value)){
      this._toggle = coerceBooleanProperty(value);
      this.doToggle();
    } else this._toggle = coerceBooleanProperty(value);
  }

  private _addLineNumbers: boolean = true;
  get addLineNumbers():boolean {return this._addLineNumbers}
  @Input() set addLineNumbers(value:BooleanInput){
    if(this.addLineNumbers !==  coerceBooleanProperty(value)){
      this._addLineNumbers = coerceBooleanProperty(value);
      this.doToggle();
    } else this._addLineNumbers = coerceBooleanProperty(value);
  }


  constructor(private el: ElementRef, private bnPrismSvc: BnPrismService) {  }

  ngAfterViewInit(){ this.doToggle(); }

  doToggle(){
    this.toggle ?  
    this.bnPrismSvc.highlightElement(this.el.nativeElement, this.language, this.addLineNumbers):
    this.bnPrismSvc.unhighlightElement(this.el.nativeElement, this.language, this.addLineNumbers);
  }

  
}
