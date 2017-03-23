require('dotenv').config()
const app = require('./server/app')
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`running on port: ${port}`)
})