import { SliderElement } from './SliderElement';

export class Progressbar extends SliderElement {

  constructor(parentEl:HTMLElement, direction:string) {
    super(parentEl, direction);
    const progressbar = document.createElement('div');
    progressbar.classList.add('progressBar');
    progressbar.style[SliderElement.vhMode[this.direction].crossAxisLength] = '100%';
    this.element = progressbar
  }

  moveTo():void {
    this.element.style[SliderElement.vhMode[this.direction].mainAxisStart] = 0;
    this.element.style[SliderElement.vhMode[this.direction].mainAxisEnd] = 0;
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