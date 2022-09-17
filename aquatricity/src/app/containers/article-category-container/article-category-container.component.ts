import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
import {Article} from "../../models";
import {UserdataService} from "../../_core/userdata.service";

@Component({
  selector: 'app-article-category-container',
  templateUrl: './article-category-container.component.html',
  styleUrls: ['./article-category-container.component.scss']
})
export class ArticleCategoryContainerComponent implements OnInit {
  category!: string;
  allArticles: Observable<Article[] | undefined> | null = null;

  constructor(private route: ActivatedRoute, private userdataService: UserdataService) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.allArticles = this.userdataService.loadArticles();
  }
}
