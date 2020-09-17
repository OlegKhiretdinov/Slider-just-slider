import { SliderElement } from './SliderElement';

export class Slider extends SliderElement{
  
  constructor(parentEl: HTMLElement, direction: string) {
    super(parentEl, direction)    
    this.element = document.createElement('div');
    this.element.classList.add('sliderJustSlider', `sliderJustSlider_${direction}`);
  }

  get slider(): HTMLElement {
    return this.element;
  }
}