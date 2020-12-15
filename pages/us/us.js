// pages/us/us.js
Page({  
  data: {  
      width: 0,  
      height: 0,  
      src: '/pages/src/background1.jpg'  
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
  
});  