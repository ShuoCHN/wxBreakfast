const cloud = require('wx-server-sdk')


cloud.init()


const db = cloud.database();


exports.main = async (event, context) => {


  
  try { 

    
    return db.collection('hello').where({ 

      tag: event.tag

    }).update({ 

      data: { 
        content: event.content,
        number:  event.number,
       

      },

    })

  } catch (e) { 
    console.log(e)
  }
}