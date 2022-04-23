import {Directive, HostBinding, Input} from '@angular/core';

interface IColor {type: ColorType; color: string}

type ColorType = 'green' | 'blue' | 'red' | 'gray' | 'black';

@Directive({
  selector: '[customColor]'
})
export class CustomColorDirective {

  readonly colors: IColor[] = [
    {
      type: 'green',
      color: '#4CAF50'
    },
    {
      type: 'blue',
      color: '#008CBA'
    },
    {
      type: 'red',
      color: '#f44336'
    },
    {
      type: 'gray',
      color: '#e7e7e7'
    },
    {
      type: 'black',
      color: '#555555'
    }
  ];

  @Input() set color(colorType: ColorType) {
    const color = this.colors.find(col => col.type === colorType);
    if (color) {
      this.backgroundColor = `${color.color}`
    }
  };

  @HostBinding('style.backgroundColor') backgroundColor = '';

}
