// miniprogram/pages/publishDetail/publishDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentId: null,
    contentDetail: {},
    saveComment: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */

   // =============================================== 此处开始复制 ===============================================
  onLoad: function (options) {
    this.data.contentId = options.id;
    this.getContentDetail();
  },
  onShow: function(){
    this.getContentDetail();
  },
  getContentDetail() {
    const db = wx.cloud.database()
    db.collection("funnys").doc(this.data.contentId)
      .get({
        success: (res) => {
          console.log(res)
          this.setData({
            contentDetail: res.data
          })
        }
      });
  },
  onInput(e) {
    this.data.saveComment.comment = e.detail.value;
  },
  onSaveComment() {
    const db = wx.cloud.database();
    const _ = db.command;
    const data = this.data.saveComment;
    if (!data.comment) {
      wx.showToast({
        title: '请输入评论~',
        icon: 'none',
        duration: 1000,
        mask: true
      });
      return;
    }

    const userInfo = wx.getStorageSync('userInfo');
    this.data.saveComment.username = userInfo.nickName;
    this.data.saveComment.avatarUrl = userInfo.avatarUrl;
    db.collection('funnys').doc(this.data.contentId).update({
      data: {
        'comment': _.push(this.data.saveComment),
      }
    }).then(res=>{
      this.setData({
        ["saveComment.comment"]: null
      })
      this.getContentDetail();
    })
  },
  // =============================================== 此处end ===============================================
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})