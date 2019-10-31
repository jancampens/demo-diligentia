import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute,
    private sceneService: SceneService,
    private location: Location,
  ) { }

    ngOnInit() {
      this.getScene();
  }

  getScene(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sceneService.getScene(id)
      .subscribe(scene => {
        console.log(scene);
        this.scene = scene;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
