import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/keep-markup/prism-keep-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-basic';
import 'prismjs/components/prism-vbnet';
import 'prismjs/components/prism-c';




declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class BnPrismService {
  renderer;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) { Prism.highlightAll(); }
  }

  highlightCode(code: string, language: string): string {
    const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
    const div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'innerHTML', highlightedCode);
    return div.innerHTML;
  }

  unhighlightElement(element:HTMLElement, language: string, addLineNumbers:boolean = true) {
    if (isPlatformBrowser(this.platformId)) {
      let code = element.textContent;
      code = this.cleanUpCode(code);
      this.renderer.setProperty(element, 'innerHTML', code);
      Prism.highlightAllUnder(element, false); 
      this.renderer.removeClass(element, 'language-'+ language);
      this.renderer.removeClass(element.parentNode, 'line-numbers');
      this.renderer.removeClass(element.parentNode, 'language-'+ language);
    }
  }

  cleanUpCode(code:string|null){
    if(code)
      return code.replace(/<span class="[^>]*">|<\/span>|<span>|<span aria-hidden="true" class="[a-z\-]*">/gmi,'')
    else return ''
  }


  highlightElement(element: HTMLElement, language: string, addLineNumbers:boolean = true): void {
    if (isPlatformBrowser(this.platformId)) {
      const code = element.textContent;
      this.renderer.addClass(element, 'language-'+ language);
      let highlightedCode = Prism.highlight(code, Prism.languages[language], language);
      highlightedCode = this.__addLineNumbers(element, highlightedCode,language, addLineNumbers)
      this.renderer.setProperty(element, 'innerHTML', highlightedCode);
    }
  }

  private __addLineNumbers(element:HTMLElement, highlightedCode:string, language:string, addLineNumbers:boolean){
    if( addLineNumbers ){
      this.renderer.addClass(element.parentNode, 'line-numbers');
      this.renderer.addClass(element.parentNode, 'language-'+ language);
      var NEW_LINE_EXP = /\n(?!$)/g;
      var match = highlightedCode.match(NEW_LINE_EXP);
      var linesNum = match ? match.length + 1 : 1;
      var lines = new Array(linesNum + 1).join('<span></span>');
      highlightedCode += `<span aria-hidden="true" class="line-numbers-rows">${lines}</span>`;
    }
    return highlightedCode
  }

  
}
