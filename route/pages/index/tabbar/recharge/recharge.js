// pages/index/tabbar/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zffs: ["快捷支付", "银联支付", "微信支付"]
  },
  pay: function(e) {
    // console.log(e);
    var summer = e.detail.value.sum;
    var zffs = e.detail.value.zffs
    console.log("输入框里输入的是：" + summer);
    if (zffs == "a") {
      console.log("您选择快捷支付");
    } else if (zffs == "b") {
      console.log("您选择了银联支付");
    } else {
      console.log("您选择了微信支付");
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})