const pool = require('./db')

//LIST ALL EQUIPMENTS

const listAllEquipment = async (req, res) => {
  try {
    const allEquipment = await pool.query('SELECT * FROM equipment')
    res.status(200).json(allEquipment.rows)
  } catch (error) {
    console.log(error.message)
    return res.status(401).json({ message: 'Internal server Error occur...' })
  }
}
module.exports = { listAllEquipment }
