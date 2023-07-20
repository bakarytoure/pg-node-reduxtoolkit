const pool = require('./db')

const findDeveloperByName = async (req, res) => {
  // const qr = req.query.name
  const search_query = String(req.query.search_query)
  //const id = parseInt(req.query.id)
  //console.log(qr)
  try {
    const developer = await pool.query(
      "SELECT * FROM developers WHERE name LIKE '%'|| $1 || '%'",
      [search_query]
    )
    res.status(200).json(developer.rows)
  } catch (error) {
    console.log(error.message)
    return res.status(401).json({ smg: 'Internal server error' })
  }
}

// const createNewDeveloper = async (req, res) => {
//   try {
//     const data = {
//       name: req.body.name,
//       image: req.body.image_url,
//     }
//     const img = await cloudinary.uploader.upload(data.image)
//     const insertImage = await pool.query(
//       `INSERT INTO developers (name, cloudinary_id, image_url) VALUES($1,$2,$3) RETURNING * `,
//       [data.name, img.public_id, img.secure_url]
//     )
//     res.status(200).json(insertImage.rows)
//   } catch (error) {
//     console.log(error.message)
//     return res.status(401).json({ smg: 'Internal server error' })
//   }
// }
