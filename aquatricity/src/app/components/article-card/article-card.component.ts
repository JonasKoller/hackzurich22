import {Component, Input, OnInit} from '@angular/core';
import {
  faHandHoldingDroplet,
  faBoltLightning,
  faBicycle,
  faTrash,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {


  @Input() icon: 'water' | 'electricity' | 'mobility' | 'trash' | 'purchases' | undefined;
  @Input() title: string = '';
  @Input() content: string = '';


  constructor() { }

  getIcon(): any {
    switch (this.icon) {
      case "water":
        return faHandHoldingDroplet;
      case "electricity":
        return faBoltLightning;
      case 'mobility':
        return faBicycle;
      case 'trash':
        return faTrash;
      case 'purchases':
        return faCartShopping;
      default: return faBoltLightning;
    }
  }

}

