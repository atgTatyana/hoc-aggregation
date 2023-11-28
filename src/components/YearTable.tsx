import { DateTransform } from "./DateTransform";
import { TableProps } from "./DateTransform";

export const YearTable = ({ list }: TableProps) => {
  // console.log('YearTable', list);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        {list.map(item => (
          <tbody key={crypto.randomUUID()}>
            <tr>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

const YearSort = DateTransform(YearTable, 'year');
export default YearSort;