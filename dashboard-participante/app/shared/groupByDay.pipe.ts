import { Pipe, PipeTransform } from '@angular/core';

const DayNumber = {
  "0": "Domingo",
  "1": "Segunda-feira",
  "2": "Terça-feira",
  "3": "Quarta-feira",
  "4": "Quinta-feira",
  "5": "Sexta-feira",
  "6": "Sábado"
}

@Pipe({name: 'groupByDay'})
export class GroupByDayPipe implements PipeTransform {
  
  transform(value: Array<any>, field: string): Array<any> {

    const groupedObj = value.reduce((prev, cur)=> {
      let day = this.getDayOfWeek(cur[field]);
      if(!prev[day]) {
        prev[day] = [cur];
      } else {
        prev[day].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
  }

  getDayOfWeek(value: string): string {
    let date = new Date(value);
    return DayNumber[date.getDay()];
  }
}