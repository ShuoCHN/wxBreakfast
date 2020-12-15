const db = wx.cloud.database()

Page({
  data: {
    "text":"提交",
    "name": "",
    "number": ""
   
  },


formSubmit:function(res){
    console.log(res)

    var submitData = res.detail.value
    submitData.name = Number(submitData.number)
    submitData.buyerCreateTime = Date()

    wx.showLoading({
      title: '数据正在提交中......',
      mask:"true"
    })
    db.collection("user").add({
      data:submitData
    }).then(res=>{
      console.log(res)
      wx.hideLoading()
    })
  }
})
     
     