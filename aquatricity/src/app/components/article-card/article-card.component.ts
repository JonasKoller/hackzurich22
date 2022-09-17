import {Component, Input, OnInit} from '@angular/core';
import {faHandHoldingDroplet, faBoltLightning} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {


  @Input() icon: 'water' | 'electricity' | undefined;
  @Input() title: string = '';
  @Input() content: string = '';


  constructor() { }

  getIcon(): any {
    switch (this.icon) {
      case "water":
        return faHandHoldingDroplet;
      case "electricity":
        return faBoltLightning;
      default: return faBoltLightning;
    }
  }

}
