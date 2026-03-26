import RevenueChart from '../../charts/RevenueChart'
import DonutChart from '../../charts/DonutChart'

export default function ChartsRow() {
  return (
    <div className="charts-row">
      <div className="panel">
        <div className="panel-title">Monthly Revenue</div>
        <RevenueChart />
      </div>
      <div className="panel">
        <div className="panel-title">Booking Status</div>
        <DonutChart />
      </div>
    </div>
  )
}

