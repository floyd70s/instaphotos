'use strict'

/**
 * @author CPerezD
 * @description se obtienen las url de las imagenes de una cuenta publica de instagram.
 */
async function instagramPhotos(req, res) {

    const Axios = require('axios').default;
    var params = req.body

    const URL = params.insta
    const resp = []

    try {
        const userInfoSource = await Axios.get(URL)
        // se extrae el bloque
        const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
        
        const userInfo = JSON.parse(jsonObject)
        // recibimos los primeros 100
        const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 100)
        for (let media of mediaArray) {
            const node = media.node

            // procesamos solo la imagen
            if ((node.__typename && node.__typename !== 'GraphImage')) {
                continue
            }

            // se agrega la imagen al arreglo
            resp.push(node.thumbnail_src)
        }
    } catch (e) {
        console.error('Unable to retrieve photos. Reason: ' + e.toString())
    }
    res.status(200).send({ resp })
}


module.exports = {
    instagramPhotos
}
