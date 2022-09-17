import {Component, Input, OnInit} from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  faArrowRight = faArrowRight;
  @Input() title: string = '';
  @Input() descriptionOne: string = '';
  @Input() descriptionTwo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
