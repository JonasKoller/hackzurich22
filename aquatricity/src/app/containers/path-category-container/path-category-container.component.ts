import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Path} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {UserdataService} from '../../_core/userdata.service';

@Component({
  selector: 'app-path-category-container',
  templateUrl: './path-category-container.component.html',
  styleUrls: ['./path-category-container.component.scss']
})
export class PathCategoryContainerComponent implements OnInit {
  category!: string;
  allPaths: Observable<Path[] | undefined> | null = null;

  constructor(private route: ActivatedRoute, private userdataService: UserdataService) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.allPaths = this.userdataService.loadPaths();
  }
}
