// import {JustSlider} from './JustSlider';
import { Point } from './Point';
import { Tip } from './Tip';
import { Slider } from './Slider';
import { Progressbar} from './Progressbar'
import { normalaizeOptions } from './utils';

export function initSlider(options: any = {}): any {
  const {
    inputEl,
    blockForSlider,
    diapason,
    pointsValue
  } = normalaizeOptions(options);

// Slider wrapper
  const slider = new Slider(blockForSlider);
  slider.render();
  const sliderEl:HTMLElement = slider.sliderEl;

// Progressbar
  const progressbar = new Progressbar();
  progressbar.render(sliderEl);

// Points
  const points = pointsValue.map((startPoint:number, index:number) => {
    const point = new Point(index, pointsValue, diapason, sliderEl);
    point.render();
    point.moveTo(startPoint) // startPoint значение из диапазона а не из value
    return point;
  });

// Tips
  const tips = pointsValue.map((startPoint:number, index:number) => {
    const tip = new Tip(index, sliderEl);
    tip.render();
    tip.moveTo(startPoint);
    return tip;
  })
  return slider;
  /**
   * создаём модель слайдера => инстанс класса
   * нормализуем аргументы
   * получаем значения для всех элементов слайдера
   * создаём инстансы элементов
   * вызываем в инстансах метод render
   */
}