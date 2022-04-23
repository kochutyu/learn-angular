import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appInterpolateTemplate]'
})
export class InterpolateTemplateDirective implements OnInit {
  // @Input() appInterpolateTemplate: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<ElementRef>
  ) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

}
