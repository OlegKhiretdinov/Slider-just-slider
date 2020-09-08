import { pointHandler } from './handlers';

export class Point {
  index
  pointsArr
  point
  diapason

  constructor(index:number, points:[number], diapason:[number]) {
    this.index = index;
    this.pointsArr = points;
    const point = document.createElement('div');
    point.classList.add('point');
    this.point = point;
    this.diapason = diapason;
  }

  prepare() {
    
    const slider = this.point.parentElement;
    /**
     * после нажатия кнопки но перед движением
     * высчитывает длину слайдера
     * определяет отношение координат к значению
     */
  }

  moveTo(num) {
    /**
     * определяет максимальные минимальные значения
     * решает можно двигаться или нет
     * если можно меняет position
     */
    this.point.style.left = `${num}px`;
  }

  // pointHandler() {
  //   const sliderWidth
  // }

  render(sliderBlock: HTMLElement):void {
    this.point.addEventListener('mousedown',() => {})
    sliderBlock.append(this.point);
    const heightPoint = this.point.offsetHeight;
    this.point.style.top = `calc(50% - ${heightPoint / 2}px)`
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