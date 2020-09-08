export class Slider {
  sliderBlock;
  sliderEl: HTMLElement;

  constructor(sliderBlock: HTMLElement) {
    this.sliderBlock = sliderBlock;
    this.sliderEl = document.createElement('div');
    this.sliderEl.classList.add('sliderJustSlider');
  }

  render():void {
    this.sliderBlock.append(this.sliderEl);
  }

  get slider(): HTMLElement {
    return this.sliderEl;
  }
}