import {Component, Input, OnInit} from '@angular/core';
import {Path} from '../../models';

@Component({
  selector: 'app-paths-category',
  templateUrl: './paths-category.component.html',
  styleUrls: ['./paths-category.component.scss']
})
export class PathsCategoryComponent implements OnInit {

  @Input() category!: string;
  @Input() paths!: Path[] | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getPathWithCategory(): Path[] {
    let filtered = this.paths?.filter(path => path.category === this.category);
    return filtered === undefined ? [] : filtered;
  }

}


