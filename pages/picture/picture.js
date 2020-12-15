// pages/picture/picture.js

Page({  
  data: {  
      width: 0,  
      height: 0,  
      src: '/pages/src/background.jpg'  ,
      imgURL:""
  },  
  onLoad: function onLoad(options) {  
      var _this = this;  
      wx.getSystemInfo({  
          success: function success(res) {  
              _this.setData({  
                  width: res.windowWidth,  
                  height: res.windowHeight  
              });  
          }  
      });  
  },  

 //上传文件
  upload(){
    //把this赋值给that，就相当于that的作用域是全局的。
    let that = this;
    console.log("jaj");
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log("成功",res);
        that.uploadImage(res.tempFilePaths[0]);
      }
    })
  },
  uploadImage(fileURL) {
    wx.cloud.uploadFile({
      cloudPath:new Date().getTime()+'.png', // 上传至云端的路径
      filePath: fileURL, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log("上传成功",res)
        //获取文件路径
        this.setData({
          imgURL:res.fileID
        })
      },
      fail: console.error
    })
  }
});  
   
   
   
   
  
