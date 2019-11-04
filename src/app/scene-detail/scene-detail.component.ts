import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SceneDetails } from '../scene-details';
import { SceneService } from '../scene.service';

import { fabric } from 'fabric';

@Component({
  selector: 'app-scene-detail',
  templateUrl: './scene-detail.component.html',
  styleUrls: ['./scene-detail.component.css']
})
export class SceneDetailComponent implements OnInit {
  scene: SceneDetails;
  canvas: any;

  constructor(
    private route: ActivatedRoute,
    private sceneService: SceneService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas');
    this.getScene();
  }

  getScene(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sceneService.getScene(id)
      .subscribe(scene => {
        this.scene = scene;
        scene.elements.forEach((element, index) => {
          this.createElement(element, index);
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  createElement(element: any, index: number) {
    let object: any;
    const properties = element.properties;

    if (element.type === 'rectangle') {
      const rect = new fabric.Rect({
        left: properties.x,
        top: properties.y,
        fill: properties.fill,
        width: properties.width,
        height: properties.height
      });
      this.renderElement(rect, index);
    } else if (element.type === 'image') {
      fabric.Image.fromURL(properties.url, (img) => {
        object = img.set({
          left: properties.x,
          top: properties.y,
          width: properties.width,
          height: properties.height
        });
        this.renderElement(object, index);
      });
    } else if (element.type === 'textBox') {
      const text = new fabric.Text(properties.text, {
        left: properties.x,
        top: properties.y,
        fill: properties.fill,
        fontSize: properties.fontSize,
      });

      if (properties.italic) {
        text.fontStyle = 'italic';
      }

      if (properties.bold) {
        text.fontWeight = 'bold';
      }

      this.renderElement(text, index);
    }
  }

  renderElement(element, index) {
    this.canvas.add(element);
    element.moveTo(index);
  }
}
