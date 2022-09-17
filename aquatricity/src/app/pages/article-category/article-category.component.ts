import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  @Input() category!: string;
  @Input() articles!: Article[] | null | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getArticleWithCategory() {
    return this.articles?.filter(article => article.category === this.category);
  }

  navigateToReadArticle(uid: string) {
    this.router.navigateByUrl(`articles/read/${uid}`);
  }
}

