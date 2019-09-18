const defaultMaps = ['creationFull', 'futileBloodFlows']

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jacint' : '',
  exportPathMap: () => {
    const paths = {}
  
    defaultMaps.forEach(mapId => {
      paths[`/${mapId}`] = {page: '/[mapId]', query: {mapId: mapId}}
    })

    return paths
  }
}