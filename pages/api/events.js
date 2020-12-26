import events from '../../data/events'

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
  res.json(events)
}
