import { SliderElement } from './SliderElement';

export class ProgressbarFill extends SliderElement {
  index
  pointsValue
  diapason

  constructor (index:number, pointsValue:[number], diapason:[number], parentEl:HTMLElement, direction:string) {
    super(parentEl, direction);
    this.index = index;
    this.pointsValue = pointsValue;
    const progressbarFill = document.createElement('div');
    progressbarFill.classList.add('progressbar-fill');
    progressbarFill.style[SliderElement.vhMode[this.direction].crossAxisLength] = '100%';
    this.element = progressbarFill;
    this.diapason = diapason;
  }

  moveTo():void {
    const minValue = this.index === -1 ? this.diapason[0] : this.pointsValue[this.index];
    const maxValue = this.index + 1 < this.pointsValue.length ? this.pointsValue[this.index + 1] : this.diapason[1]
    const minPosition = (minValue - this.diapason[0]) / (this.diapason[1] - this.diapason[0]);
    const maxPosition = (this.diapason[1] - maxValue) / (this.diapason[1] - this.diapason[0]);
    this.element.style[SliderElement.vhMode[this.direction].mainAxisStart] = `${minPosition * 100}%`;
    this.element.style[SliderElement.vhMode[this.direction].mainAxisEnd] = `${maxPosition * 100}%`;
  }

  positioning():void {
    const heightElement = this.element[SliderElement.vhMode[this.direction].heightElement];
    const parentHeight = this.parentEl[SliderElement.vhMode[this.direction].heightElement];
    this.element.style[SliderElement.vhMode[this.direction].crossAxisStart] = `${(parentHeight - heightElement) / 2}px`;
  }

  render():void {
    this.parentEl.append(this.element);
    this.positioning();
  }
}