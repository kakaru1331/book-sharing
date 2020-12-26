import events from '../../../data/events'
import applications from '../../../data/applications'

export default async function handle(req, res) {
  const {
    query: { id },
  } = req

  if (req.method === 'GET') {
    handleGET(parseInt(id),res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/events
async function handleGET(eventID, res) {
  const event = events.find(e => e.eventID === eventID)
  const relatedApplication = applications.filter(application => application.eventID === event.eventID)
  const countOfApplicant = relatedApplication.length
  
  const data = {
    event,
    relatedApplication,
    countOfApplicant
  }
  
  res.json(data)
}
