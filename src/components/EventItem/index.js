// Write your code here
import './index.css'

// import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const activeImageClassName = isActive ? 'active-event-img' : 'event-img'

  const onClickEvent = () => {
    setActiveId(id)
  }
  return (
    <li className="event-item">
      <button type="button" className="btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={activeImageClassName} />
      </button>
      <p className="festival">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
