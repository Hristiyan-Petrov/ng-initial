import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() title!: string; 
  @Input() posts: Post[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
