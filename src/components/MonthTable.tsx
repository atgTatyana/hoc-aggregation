import { DateTransform } from "./DateTransform";
import { TableProps } from "./DateTransform";

export const MonthTable = ({ list }: TableProps) => {
  // console.log('MonthTable', list);

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        {list.map(item => (
          <tbody key={crypto.randomUUID()}>
            <tr>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody> 
        ))}
      </table>
    </div>
  )
}

const MonthSort = DateTransform(MonthTable, 'month');
export default MonthSort;