import {Component, Input, OnInit} from '@angular/core';
import {faBoltLightning, faCheck, faHandHoldingDroplet, faQuestion, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-past-path-card',
  templateUrl: './past-path-card.component.html',
  styleUrls: ['./past-path-card.component.scss']
})
export class PastPathCardComponent {

  @Input() icon: 'water' | 'electricity' | undefined;
  @Input() status: 'done' | 'canceled' | undefined;
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
