import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Directive({
  selector: '[myDelete]'
})
export class IfDirective{
  constructor(
    private _templateRef : TemplateRef<any>,
    private _viewContainerRef : ViewContainerRef
  ){}

  @Input() set myDelete(shouldDisplay : boolean){
      if(shouldDisplay){
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      }
      else{
        this._viewContainerRef.clear();
      }
  }
}
