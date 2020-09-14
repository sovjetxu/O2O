// pages/index/tabbar/account/account.js
const app = getApp();
var tiaozhuan ="";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tiaozhuan: function (reture) {        /**跳转封装的函数*/
    wx.navigateTo({
      url: reture,
      success: function (res) {
        console.log("跳转界面成功")
      },
      fail: function (res) {
        console.log("跳转界面失败")
        // console.log(res)
      },
      complete: function (res) { },
    })
  },

  recharge:function(){        //充值页面跳转
    tiaozhuan = '../recharge/recharge',
      this.tiaozhuan(tiaozhuan);
    console.log("跳转到账户充值界面------------recharge");
  },
  ye:function(){              //余额页面跳转
    tiaozhuan = '../balance/balance',
      this.tiaozhuan(tiaozhuan);
    console.log("跳转到账户余额界面------------balance");
  },                  
  xf:function(){              //消费记录界面跳转
    tiaozhuan = '../expenditure/expenditure',
      this.tiaozhuan(tiaozhuan);
    console.log("跳转到消费记录界面------------expenditure");
  },
  cz:function(){              //充值记录界面跳转
    tiaozhuan = '../charge/charge'
      this.tiaozhuan(tiaozhuan)
    console.log("跳转到充值记录界面------------charge")
  },
  wode:function(){           //个人资料界面跳转
    tiaozhuan = '../personal/personal',
      this.tiaozhuan(tiaozhuan);
    console.log("跳转到我的资料界面------------personal");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setTabBarStyle({       /*动态设置 tabBar 的整体样式*/
      color: '#bebebe',
      selectedColor: '#00B26A',
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    })
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