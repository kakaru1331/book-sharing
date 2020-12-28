import events from '../../../data/events'
import applications from '../../../data/applications'
import eventResults from '../../../data/eventResults'

export default async function handle (req, res) {
  const {
    query: { id }
  } = req

  if (req.method === 'GET') {
    handleGET(parseInt(id), res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/events
async function handleGET (eventID, res) {
  const event = events.find(e => e.eventID === eventID)
  const relatedApplications = applications.filter(application => application.eventID === event.eventID)
  const countOfApplicant = relatedApplications.length
  const relatedEventResult = eventResults.find(eventResult => eventResult.eventID === event.eventID) || null
  const winningApplication = relatedEventResult
    ? relatedApplications.find(application => application.applicationID === relatedEventResult.applicationID)
    : null

  const data = {
    event,
    relatedApplications,
    countOfApplicant,
    winningApplication
  }

  res.json(data)
}
