// Write your code here
import './index.css'

const eventStatusConstants = {
  initial: 'INITIAL',
  isRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveView = () => (
    <p className="details">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-img"
      />
      <p className="text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="register-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="register-img"
        alt="registrations closed"
      />
      <h1 className="register-text">Registrations Are Closed Now!!</h1>
      <p className="closed">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case eventStatusConstants.isRegistered:
        return renderYetToRegisterView()
      case eventStatusConstants.registered:
        return renderRegisteredView()
      case eventStatusConstants.registrationsClosed:
        return renderRegistrationsClosedView()

      default:
        return renderNoActiveView()
    }
  }

  return <>{renderActiveRegistrationDetails()}</>
}

export default ActiveRegistrationDetails
