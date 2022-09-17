import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  @Input() category!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
