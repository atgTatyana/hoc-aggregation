import { DateTransform } from "./DateTransform";
import { TableProps } from "./DateTransform";

export const SortTable = ({ list }: TableProps) => {
  // console.log('SortTable', list);

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        {list.map(item => (
          <tbody key={crypto.randomUUID()}>
            <tr>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

const Sort = DateTransform(SortTable, 'date');
export default Sort;