import {Component, Input, OnInit} from '@angular/core';
import {
  faBoltLightning,
  faHandHoldingDroplet,
  faBicycle,
  faTrash,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.scss']
})
export class CategoryTileComponent implements OnInit {
  @Input() icon: 'water' | 'electricity' | 'mobility' | 'trash' | 'purchasing' | undefined;
  @Input() description: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

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
      case 'purchasing':
        return faCartShopping;
      default: return faBoltLightning;
    }
  }

}
