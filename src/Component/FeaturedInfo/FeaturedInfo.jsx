import "./FeaturedInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className='featuredTitle'>Revanue</span>
        <div className="farturedMoneyContainer">
            <span className="featuredMoney">$2,422</span>
            <span className="featuredMoneyRate">-11.3 <ArrowDownwardIcon className="featuredIcon negative"/> </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>Sales</span>
        <div className="farturedMoneyContainer">
            <span className="featuredMoney">$4,422</span>
            <span className="featuredMoneyRate">-4.3 <ArrowDownwardIcon className="featuredIcon negative"/> </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>Cost</span>
        <div className="farturedMoneyContainer">
            <span className="featuredMoney">$1,422</span>
            <span className="featuredMoneyRate">+1.3 <ArrowUpwardIcon className="featuredIcon"/> </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
