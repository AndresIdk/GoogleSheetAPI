const { GoogleSpreadsheet } = require('google-spreadsheet')

// Credenciales

const credenciales = require('./keys/key.json')

// Documento de Google Sheet

let googleID = '19dlXaw_u--9j8_W9uCdbfd0qXP2toUY9Hd-q-Hbyvpw'

const AccederSheet = async () => {
    try {
        // Creo instancia de documento
        const documento = new GoogleSpreadsheet(googleID)

        // Espero la confirmacion de permisos
        await documento.useServiceAccountAuth(credenciales)

        // Obtener la informacion
        await documento.loadInfo()

        // Obtengo la hoja 1 (Sheet 1)
        const sheet = documento.sheetsByIndex[0]
        const registros = await sheet.getRows()

        // Muestro en consola
        return registros

    } catch (e) {
        console.error('Se presentó el siguiente error: ', e)
    }
}

const EscribirSheet = async () => {
    try {
        const documento = new GoogleSpreadsheet(googleID)
        await documento.useServiceAccountAuth(credenciales)
        await documento.loadInfo()

        const sheet = documento.sheetsByIndex[0]
        await sheet.addRow({
            "Nombre": "jh",
            "Dia": "2",
            "Mes": "3",
            "Año": "2023"
        })
    } catch (e) {
        console.error('Se presentó el siguiente error: ', e)
    }
}

EscribirSheet()

module.exports = {
    AccederSheet: AccederSheet,
}