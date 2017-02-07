import {Directive, ElementRef, Renderer, OnInit, Input, OnChanges} from "@angular/core";

@Directive({
    selector: '[myHidden]'
})
export class HiddenDirective implements OnInit{
  constructor(private el : ElementRef, private renderer : Renderer){}
  ngOnInit(){
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
  }
}
