import events from '../../../data/events'

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
  
  res.json(event)
}
