import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { sendStatusCode } from 'next/dist/next-server/server/api-utils'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1OSjRrsVu3dXhmxncWWeZnZnk66BxjAH5EEbrPV3nl6s')

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

    const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
    const textoCell = sheetConfig.getCell(1, 1)

    let Cupom = ''
    let Promo = ''

    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      // TODO: GERAR CUPOM
      Cupom = genCupom()
      Promo = textoCell.value
    }

    //Nome - Email - Whatsapp - Data - preenchiemnto - NotaCupom - Promo
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      'Data Preenchimento': moment().format('DD - MMM - YYYY, HH:mm:ss'),
      Nota: 5,
      Cupom,
      Promo
    })
    res.end(JSON.stringify({
      showCoupon: cupom !== '',
      Cupom,
      Promo
    }))
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}