import { pointMouseDown } from './handlers';

export class Point {
  parentEl
  index
  pointsValue
  pointEl
  diapason

  constructor(index:number, pointsValue:[number], diapason:[number], parentEl:HTMLElement) {
    this.parentEl = parentEl;
    this.index = index;
    this.pointsValue = pointsValue;
    const point = document.createElement('div');
    point.classList.add('point');
    this.pointEl = point;
    this.diapason = diapason;
  }

  moveTo():void {
    const positioningVal = (this.pointsValue[this.index] - this.diapason[0]) / (this.diapason[1] - this.diapason[0]);
    const widthPoint = this.pointEl.offsetWidth;
    this.pointEl.style.left = `calc(${positioningVal * 100}% - ${widthPoint / 2}px)`;
  }

  positioning():void {
    const heightPoint = this.pointEl.offsetHeight;
    const parentHeight = this.parentEl.offsetHeight;
    this.pointEl.style.top = `${(parentHeight - heightPoint) / 2}px`;
  }

  render():void {
    this.parentEl.append(this.pointEl);
    this.positioning();
    this.pointEl.addEventListener('mousedown', pointMouseDown.bind(this));
  }
}
