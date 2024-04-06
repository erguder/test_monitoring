import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {

  @Input() imageUrl: string = '';
  zoomLevel: number = 1;
  rotationDegrees: number = 0;
  isDragging: boolean = false;
  dragStartX: number = 0;
  dragStartY: number = 0;
  imagePositionX: number = 0;
  imagePositionY: number = 0;

  constructor() {}

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.dragStartX;
      const deltaY = event.clientY - this.dragStartY;
      this.dragStartX = event.clientX;
      this.dragStartY = event.clientY;

      this.imagePositionX += deltaX;
      this.imagePositionY += deltaY;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  zoomIn() {
    this.zoomLevel += 0.1;
  }

  zoomOut() {
    if (this.zoomLevel > 0.1) {
      this.zoomLevel -= 0.1;
    }
  }

  zoomImage(event: WheelEvent) {
    event.preventDefault();
    this.zoomLevel += (event.deltaY > 0 ? -0.1 : 0.1);
  }

  rotateClockwise() {
    this.rotationDegrees += 90;
  }

  rotateCounterClockwise() {
    this.rotationDegrees -= 90;
  }

  rotateImage(event: MouseEvent) {
    event.preventDefault();
    this.rotationDegrees += 90;
  }

  resetImage() {
    this.zoomLevel = 1;
    this.rotationDegrees = 0;
  }
}
