import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from 'src/app/_core/auth.service';
import {Article, Path, Userdata} from '../../models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() userdata: Userdata | undefined | null = null;
  @Input() allPaths: Path[] | undefined |null = null;
  @Input() allArticles: Article[] | undefined | null = null;

  currentPath: Path | undefined = undefined;

  currentUser: any;
  finishedPathTasks = ['Boil the right amount of water', 'Switch off devices in standby', 'Always turn off light'];
  unfinishedPathTasks = ['Cooking with a lid', 'Proper ventilation'];

  constructor(private auth: AuthService) { }

  async ngOnInit() {
    this.currentUser = await this.auth.getCurrentUser();
    this.currentPath = this.allPaths?.filter(value => value.uid === this.userdata?.currentPath).pop();
  }

}
