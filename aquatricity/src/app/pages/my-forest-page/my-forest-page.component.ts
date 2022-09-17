import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Article, Path} from "../../models";

@Component({
  selector: 'app-my-forest-page',
  templateUrl: './my-forest-page.component.html',
  styleUrls: ['./my-forest-page.component.scss']
})
export class MyForestPageComponent implements OnInit {

  @Input() level: number | null = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
