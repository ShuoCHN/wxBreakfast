//获取应用实例
const app = getApp();
 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo') || null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onShow(){
    this.data.userInfo =  wx.getStorageSync('userInfo') || null;
    if(this.data.userInfo && Object.keys(this.data.userInfo).length > 0) {
      this.setData({
        userInfo: this.data.userInfo,
        hasUserInfo: true
      })
    }
  },
  onLoad: function (options) {
    // var that = this;
    // if (app.globalData.userInfo) {
    //   that.setUserInfo(app.globalData.userInfo);
    // } else if (that.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     that.setUserInfo(res.userInfo);
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       that.setUserInfo(res.userInfo);
    //     }
    //   })
    // }
  },
 
  getUserInfo: function (e) {
    // this.setUserInfo(e.detail.userInfo);
    if(e.detail.errMsg != "getUserInfo:ok") {
      console.log("拒绝授权")
      return;
    }
    wx.setStorageSync('userInfo', e.detail.userInfo);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
  setUserInfo: function (userInfo) {
    console.log(userInfo);
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  },
  
  data:
   { userInfo: {}, hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), 
    menuitems: 
    [ 
     { text: '使用说明', url: '/pages/picture/picture', icon: '/pages/src/pic.png', tips: '' } ,
     { text: '我的信息', url: '/pages/infor/infor', icon: '/pages/src/infor.png', tips: '' } ,
     { text: '关于我们', url: '/pages/us/us', icon: '/pages/src/us.png', tips: '' } ,
    
     
    ] }, 
    
})