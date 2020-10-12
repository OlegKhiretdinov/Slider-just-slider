# Slider just Slider

range slider


| option         | values type | default values | description |
|:--             | :-- |:--|:--             |
| inputSelector  | string                       |input| селектор поля ввода |
| sliderSelector  | string |.just-slider| селктор блока где будет расположен слайдер |
| values  | Array |[0, 1000]| Диапазон значений. |
| pointsValue  | Array | [100] | Начальное значение точек. Количество точек на слайдере соответствует количеству значений |
| progressbarMode  | 'from'                       | 'from ' \|\| 'to' | Точка отсчёта выбранного слайдером диапазона. 'from' - первая точка. 'to' -  начало диапазона |
| direction  | 'horizontal' \|\| 'vertical' |'vertical'| выбор вертикального или горизонтального вида |



```javascript
sliderJustSlider.initSlider({

  inputSelector: '.input-slider-2',

  sliderSelector:'.slider-2',

  values: [100, 500],

  pointsValue: [300, 110, 250],

  direction: 'vertical',

  progressbarMode: 'from',

  step: 50,

});
```

