import ServiceCard   from '../services/ServiceCard'
import GoldButton    from '../../Ui/GoldButton'
import Icon, { ICONS } from '../../Ui/Icon'
import { SERVICES }  from '../../Constants/mockData'

export default function Services() {
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:'20px' }}>
        <GoldButton><Icon d={ICONS.plus} size={14} /> &nbsp;Add Service</GoldButton>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'16px' }}>
        {SERVICES.map((s, i) => <ServiceCard key={s.name} {...s} delay={i * 0.07} />)}
      </div>
    </div>
  )
}