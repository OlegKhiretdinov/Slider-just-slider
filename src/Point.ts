import { pointMouseDown } from './handlers';
import { Slider } from './Slider';
import { SliderElement } from './SliderElement';

export class Point extends SliderElement {
  index
  pointsValue
  diapason

  constructor(index:number, pointsValue:[number], diapason:[number], parentEl:HTMLElement, direction:string) {
    super(parentEl, direction);
    this.index = index;
    this.pointsValue = pointsValue;
    const point = document.createElement('div');
    point.classList.add('point');
    this.element = point;
    this.diapason = diapason;
  }

  moveTo():void {
    const positioningVal = (this.pointsValue[this.index] - this.diapason[0]) / (this.diapason[1] - this.diapason[0]);
    const widthPoint = this.element.offsetWidth; //!!!!!!
    this.element.style[SliderElement.vhMode[this.direction].mainAxisStart] = `calc(${positioningVal * 100}% - ${widthPoint / 2}px)`;
  }

  positioning():void {
    const pointHeight = this.element[SliderElement.vhMode[this.direction].crossAxisElementSize];
    const parentHeight = this.parentEl[SliderElement.vhMode[this.direction].crossAxisElementSize];
    this.element.style[Slider.vhMode[this.direction].crossAxisEnd] = `${(parentHeight - pointHeight) / 2}px`;
  }

  render():void {
    this.parentEl.append(this.element);
    this.positioning();
    this.element.addEventListener('mousedown', pointMouseDown.bind(this, SliderElement.vhMode[this.direction].mainAxisCoordinate));
  }
}
