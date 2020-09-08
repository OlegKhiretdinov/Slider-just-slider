// import {JustSlider} from './JustSlider';
import { Point } from './Point';
import { Slider } from './Slider';
import { Progressbar} from './Progressbar'
import { normalaizeOptions } from './utils';

export function initSlider(options: any = {}): any {
  const {
    inputEl,
    blockForSlider,
    diapason,
    points    
  } = normalaizeOptions(options);

// Slider wrapper
  const slider = new Slider(blockForSlider);
  slider.render();

// Progressbar
  const progressbar = new Progressbar();
  progressbar.render(slider.sliderEl);

//Points
  points.forEach((startPoint:number, index:number) => {
    const point = new Point(index, points, diapason);
    point.render(slider.sliderEl);
    point.moveTo(startPoint) // startPoint значение из диапазона а не из value
  });
  

  return slider;
  /**
   * создаём модель слайдера => инстанс класса
   * нормализуем аргументы
   * получаем значения для всех элементов слайдера
   * создаём инстансы элементов
   * вызываем в инстансах метод render
   */
}