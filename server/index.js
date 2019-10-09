const express = require('express')
const app = express()

const port = process.env.PORT || 3001
const clientId = process.env.SPOTIFY_CLIENT_ID || ''
const redirect_uri = `http://${process.env.URI || 'localhost'}/callback`

const permissions = 'user-follow-modify'
const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
  permissions
)}&redirect_uri=${encodeURIComponent(redirect_uri)}`

// Routes.
app.get('/login', (_, res) => {
  res.redirect(url)
})

app.listen(port, () => `app running on port: ${port}`)
