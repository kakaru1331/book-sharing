import events from '../../data/events'
import applications from '../../data/applications'

export default async function handle(req, res) {
  if (req.method === 'GET') {
    handleGET(res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/events
async function handleGET(res) {
  const eventsWithApplicant = events.map(event => {
    const countOfApplicant = applications.filter(application => application.eventID === event.eventID).length

    return {
      ...event,
      countOfApplicant
    }
  })

  res.json(eventsWithApplicant)
}
