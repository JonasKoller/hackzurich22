import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-category-container',
  templateUrl: './article-category-container.component.html',
  styleUrls: ['./article-category-container.component.scss']
})
export class ArticleCategoryContainerComponent implements OnInit {
  category!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')!;
  }
}
