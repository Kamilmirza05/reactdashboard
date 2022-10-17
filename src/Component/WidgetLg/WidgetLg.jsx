import "./WidgetLg.css"

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  };
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
      <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Davacoo</span>
          </td>
          <td className="widgetLgDate">1 Jan</td>
          <td className="widgetLgAmount">$222</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr> 
        {/* <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr> */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Davacoo</span>
          </td>
          <td className="widgetLgDate">1 Jan</td>
          <td className="widgetLgAmount">$222</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
         {/* <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr> */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Davacoo</span>
          </td>
          <td className="widgetLgDate">1 Jan</td>
          <td className="widgetLgAmount">$222</td>
          <td className="widgetLgStatus"><Button type="Panding"/></td>
        </tr>
         {/* <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr> */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Davacoo</span>
          </td>
          <td className="widgetLgDate">1 Jan</td>
          <td className="widgetLgAmount">$222</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
