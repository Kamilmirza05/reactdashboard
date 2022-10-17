import Chart from "../../Component/Chart/Chart"
import FeaturedInfo from "../../Component/FeaturedInfo/FeaturedInfo"
import "./Home.css"
import {Userdata} from "../../dummeydata"
import WidgetSm from "../../Component/WidgetSm/WidgetSm"
import WidgetLg from "../../Component/WidgetLg/WidgetLg"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={Userdata} title="User Analytics" grid datakey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
