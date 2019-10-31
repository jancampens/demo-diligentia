import { Component, OnInit } from '@angular/core';

import { Scene } from '../scene';
import { SceneService } from '../scene.service';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent implements OnInit {
  scenes: Scene[];

  constructor(
    private sceneService: SceneService
  ) { }

  ngOnInit() {
    this.getScenes();
  }

  getScenes(): void {
    this.sceneService.getScenes()
      .subscribe(scenes => this.scenes = scenes.scenes);
  }

}
