import {Component, Input, OnInit} from '@angular/core';
import {
  faBicycle,
  faBoltLightning, faCartShopping,
  faCheck,
  faHandHoldingDroplet,
  faQuestion, faTrash,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-past-path-card',
  templateUrl: './past-path-card.component.html',
  styleUrls: ['./past-path-card.component.scss']
})
export class PastPathCardComponent {

  @Input() icon: 'water' | 'electricity' | 'mobility' | 'trash' | 'purchases' | undefined;
  @Input() status: 'done' | 'canceled' | undefined;
  @Input() title: string | undefined = '';
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

  getStatusIcon(): any {
    switch (this.status) {
      case "done":
        return faCheck;
      case "canceled":
        return faXmark;
      default: return faQuestion;
    }
  }

}
