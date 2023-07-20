const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8000
const api = require('./router/equipmentRouter')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//LIST ALL equipment
app.get('/equipment', api.listAllEquipment)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
