import { pointHandler } from './handlers';

export class Point {
  parentEl
  index
  pointsArr
  pointEl
  diapason

  constructor(index:number, points:[number], diapason:[number], parentEl:HTMLElement) {
    this.parentEl = parentEl;
    this.index = index;
    this.pointsArr = points;
    const point = document.createElement('div');
    point.classList.add('point');
    this.pointEl = point;
    this.diapason = diapason;
  }

  moveTo(num:number):void {
    /**
     * определяет максимальные минимальные значения
     * решает можно двигаться или нет
     * если можно меняет position
     * 
     * 
     */
    this.pointEl.style.left = `${num}px`;
  }

  // pointHandler() {
  //   const sliderWidth
  // }

  positioning():void {
    const heightPoint = this.pointEl.offsetHeight;
    const parentHeight = this.parentEl.offsetHeight;
    this.pointEl.style.top = `${(parentHeight - heightPoint) / 2}px`;
  }

  render():void {
    this.parentEl.append(this.pointEl);
    this.positioning();
    this.pointEl.addEventListener('mousedown', pointHandler.bind(this));
  }
}




/**
 * https://learn.javascript.ru/class-inheritance
 * клас Point наследуется от Slider
 * юзает его стейт и для переопределения стейта использует его методы
 * 
 * 
 * А если во все классы передавать объект. Он передаётся по ссылке?
 */