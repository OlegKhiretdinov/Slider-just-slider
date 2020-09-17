import { SliderElement } from './SliderElement'

export class Tip extends SliderElement {
  index
  pointsValue
  diapason

  constructor(index:number, pointsValue:number[], diapason:number[], parentEl:HTMLElement, direction:string) {
    super(parentEl, direction)
    this.index = index;
    this.pointsValue = pointsValue;
    const tip = document.createElement('div');
    tip.classList.add('tip');
    this.element = tip;
    this.diapason = diapason;
  }

  moveTo():void {
    const positioningVal = (this.pointsValue[this.index] - this.diapason[0]) / (this.diapason[1] - this.diapason[0]);
    const widthPoint = this.element[SliderElement.vhMode[this.direction].mainAxisElementSize]
    this.element.style[SliderElement.vhMode[this.direction].mainAxisStart] = `calc(${positioningVal * 100}% - ${widthPoint / 2}px)`;
  }

  showValues():void {
    this.element.innerHTML = `${this.pointsValue[this.index]}`;
  }

  positioning ():void {
    const samePointHeight = this.parentEl.querySelectorAll('.point')[this.index][SliderElement.vhMode[this.direction].crossAxisElementSize];
    const parentHeight = this.parentEl[SliderElement.vhMode[this.direction].crossAxisElementSize];
    this.element.style[SliderElement.vhMode[this.direction].crossAxisStart] = `${(parentHeight + samePointHeight) / 2}px`;
  }

  render():void {
    this.parentEl.append(this.element);
    this.positioning();
  }
}
