import { Point } from './Point';
import { Tip } from './Tip';
import { Slider } from './Slider';
import { Progressbar} from './Progressbar'
import { normalaizeOptions } from './utils';
import { Observer } from './Observer';
import { ProgressbarFill } from './ProgressbarFill';

export function initSlider(options: any = {}): any {
  const {
    inputEl,
    blockForSlider,
    diapason,
    value,
    progressbarFillPoint,
    direction,
  } = normalaizeOptions(options);

// Observer
  const observer = new Observer();

  const pointsValue = new Proxy(value, {
    set(target, prop, val):boolean {
      target[prop] = val;
      observer.broadcast();
      return true;
    }
  })

// Slider wrapper
  const slider = new Slider(blockForSlider, direction);
  slider.render();
  const sliderEl:HTMLElement = slider.slider;

// Progressbar
  const progressbar = new Progressbar(sliderEl, direction);
  progressbar.render();
  progressbar.moveTo();

//Progressbar Fill
const progressbarFill = progressbarFillPoint.map((index:number) => {
  const progressbarFill = new ProgressbarFill(index, pointsValue, diapason, sliderEl, direction);
  progressbarFill.render();
  progressbarFill.moveTo();
  observer.subscribe(progressbarFill.moveTo.bind(progressbarFill));
});

// Points
  const points = pointsValue.map((startPoint:number, index:number) => {
    const point = new Point(index, pointsValue, diapason, sliderEl, direction);
    point.render();
    point.moveTo();
    observer.subscribe(point.moveTo.bind(point));
  });

// Tips
  const tips = pointsValue.map((startPoint:number, index:number) => {
    const tip = new Tip(index, pointsValue, diapason,  sliderEl, direction);
    tip.render();
    tip.showValues();
    tip.moveTo();
    observer.subscribe(tip.showValues.bind(tip));
    observer.subscribe(tip.moveTo.bind(tip));
    return tip;
  });

  return slider;
}