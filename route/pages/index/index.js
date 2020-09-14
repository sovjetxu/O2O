//index.js
//获取应用实例
var tiaozhuan ="";
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideshow: [
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2874056815,3246425860&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579071198,541973577&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1994919799,3021646168&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2868913166,51603812&fm=26&gp=0.jpg"
    ],
    depot: [
      "../../img/zhye.png",
      "../../img/czjl.png",
      "../../img/xfjl.png",
      "../../img/grzl.png"
    ]
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

  balance: function () {         //账户余额界面跳转
    tiaozhuan = './tabbar/balance/balance',
      this.tiaozhuan(tiaozhuan);
    console.log("跳转到账户余额界面------------balance");
  },
  charge:function(){              //充值记录界面跳转
    tiaozhuan = './tabbar/charge/charge'
      this.tiaozhuan(tiaozhuan)
    console.log("跳转到充值记录界面------------charge")
  },
  expenditure:function(){         //消费记录界面跳转
    tiaozhuan='./tabbar/expenditure/expenditure',
    this.tiaozhuan(tiaozhuan);
    console.log("跳转到消费记录界面------------expenditure");
  },
  personal:function(){          //个人资料界面跳转
    tiaozhuan= './tabbar/personal/personal',
    this.tiaozhuan(tiaozhuan);
    console.log("跳转到个人资料界面------------personal");
  },
  purchase:function(){          //购买界面
    tiaozhuan = './tabbar/purchase/purchase',
      this.tiaozhuan(tiaozhuan);
    console.log("跳转到购买商品界面------------personal");
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
    // wx.hideTabBarRedDot({       /*隐藏 tabBar 某一项的右上角的红点*/
    //   index: 0,
    // }),
    // wx.removeTabBarBadge({      /*移除 tabBar 某一项右上角的文本*/
    //   index: 0,
    // })
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
    // wx.showTabBar({       /*显示 tabBar*/
    //   animation: true
    // })
    setTimeout(function () {
      // 不加这个方法真机下拉会一直处于刷新状态，无法复位
      wx.stopPullDownRefresh()
    }, 1500)
      console.log("-------------------")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    // wx.hideTabBar({             /*隐藏 tabBar*/
    //   animation: true //是否需要动画效果
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})