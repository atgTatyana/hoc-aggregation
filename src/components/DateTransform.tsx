import React from 'react';
import moment from 'moment';
import { IList } from '../App';

export interface TableProps {
  list: IList[],
}

export const DateTransform = (Component: React.FC<TableProps>, arg: string) => {
  const newComponent = ({ list }: TableProps) => {
    list.sort((a, b) => a.date && b.date ? 
      a.date < b.date ? 1 : -1
    : -1);
    let newList: IList[] = [];

    if (arg === 'date') {
      console.log('date')
      newList = list;
    }

    if (arg === 'month') {
      console.log('month')
      newList = list.map((item) => {
        const month = moment(item.date).format('MMM')
        return {month: month, amount: item.amount}
      })
    }

    if (arg === 'year') {
      console.log('year')
      newList = list.map((item) => {
        const year = moment(item.date).format('YYYY')
        return {year: year, amount: item.amount}
      })
    }
    
    return (
      <Component list={newList} />
    )
  }
  return newComponent;
}
