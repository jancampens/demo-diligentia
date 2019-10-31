import { Component, OnInit } from '@angular/core';

import { Scene } from '../scene';
import { SceneService } from '../scene.service';

@Component({
  selector: 'app-scene-detail',
  templateUrl: './scene-detail.component.html',
  styleUrls: ['./scene-detail.component.css']
})
export class SceneDetailComponent implements OnInit {
  scene: Scene;

  constructor(
    private sceneService: SceneService
  ) { }

    ngOnInit() {
      this.getScene();
  }

  getScene(): void {
    this.sceneService.getScene('5d109175ad8b70c446000001')
      .subscribe(scene => {
        console.log(scene);
        this.scene = scene;
      });
  }

}
