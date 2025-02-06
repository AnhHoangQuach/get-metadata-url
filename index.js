const urlMetadata = require('url-metadata')

urlMetadata('http://chillme.vn').then(async (metadata) => {
  console.log(JSON.stringify(metadata, '*****', 8))
})
