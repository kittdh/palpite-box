import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1OSjRrsVu3dXhmxncWWeZnZnk66BxjAH5EEbrPV3nl6s')

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    //Nome Email Whatsapp Cupom Promo
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom: 'aaa111',
      Promo: 'teste'
    })
    res.end(req.body)
  }
  catch (err) {
    console.log(err)
    res.end('error')
  }
}