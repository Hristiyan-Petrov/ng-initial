import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent<T> {

  @Input() title!: string;
  @Input() posts: T[] | undefined;
  @Input() itemTemplateRef!: TemplateRef<{ $implicit: T }>

  constructor() { }


}
