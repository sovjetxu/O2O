// pages/index/tabbar/appoint/appoint.js
var riqi="";     //全局日期
var shijian=""   //全局时间
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ddrq:riqi,
    ddsj:shijian,
    bindsubmit:"一道云OpenStack系列课程"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sj = new Date;
    var year = sj.getFullYear();    //年
    var mon = sj.getMonth()+1;      //月
    var data = sj.getDate();        //日
    var hours = sj.getHours();      //时
    var min = sj.getMinutes();      //分
    riqi = year + "-" + mon + "-" + data;
    shijian = hours+":"+min;
    // console.log(riqi);
    // console.log(shijian);
    this.setData({
      ddrq:riqi,
      ddsj:shijian
    })         /*用的时候取消备注*/
  },
  
  arrivedate:function(e){
    // console.log(e);
    this.setData({
      ddrq: e.detail.value
    })
  },
  arrivetime: function (e) {
    // console.log(e);
    this.setData({
      ddsj: e.detail.value
    })
  },
  tijiao:function(e){
    console.log("服务项目："+this.data.bindsubmit,"到店日期："+e.detail.value.riqi,"到店时间："+e.detail.value.shijian,"留言内容："+e.detail.value.liuyan);
  },
  xuanze:function(){      //显示操作菜单
    var that = this;
    wx.showActionSheet({
      itemList: ["VR环境应用","VR游戏开发","VR虚拟现实课程","一道云OpenStack系列课程"],
      success (res) {
        // console.log(res);
        var icones=["一道云OpenStack系列课程","VR虚拟现实课程","VR环境应用","VR游戏开发"];
        that.setData({
          bindsubmit:icones[res.tapIndex]
        })
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
              /*用的时候取消备注*/
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '预约详情'
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