// cloud/get_id/infor.js
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {

  return db.collection('hello').where({

    tag: event.tag

  })

    .get()

}