import { Component, OnInit } from '@angular/core';

import { Scene } from '../models/scene';
import { Scenes } from '../models/scenes';

import { SceneService } from '../scene.service';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent implements OnInit {
  scenes: Scenes;
  limit = 20;
  skip = 0;
  length: number;

  constructor(
    private sceneService: SceneService
  ) { }

  ngOnInit() {
    this.getScenes();
  }

  getScenes(): void {
    this.sceneService.getScenes(this.limit, this.skip)
      .subscribe(scenes => {
        this.length = scenes.pages * this.limit;
        this.scenes = scenes;
      });
  }

  handlePage(event) {
    this.skip = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.getScenes();
  }

}
