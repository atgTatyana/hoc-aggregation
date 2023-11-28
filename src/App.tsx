// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
import React from 'react';
import './App.css'
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';

export interface IList {
  date?: string,
  amount: number,
  month?: string,
  year?: string,
}

export default class App extends React.Component {
  state = {
    list: [],
  };

  componentDidMount(): void {
    fetch(import.meta.env.VITE_DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ответ сети был не ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          list: data.list,
        })
      })
  }

  render() {
    const { list } = this.state;
    console.log(list)
    return (
      <div id="app">
        <MonthTable list={list} />
        <YearTable list={list} />
        <SortTable list={list} />
      </div>
    );
  }
}
