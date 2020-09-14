// pages/index/tabbar/indent/indent.js
var lisp=[];
var lisy=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lise: ["全部", "待付款", "配送中"],
    teet: 0,                                    /**控制页面显示是/否 */
    list: [{ /**全部的循环函数 */
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2874056815,3246425860&fm=26&gp=0.jpg",
      merchandise: "VR虚拟现实课程",
      odd: "1625498256542",
      state: "待付款"
    }, {
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579071198,541973577&fm=26&gp=0.jpg",
      merchandise: "VR环境应用",
      odd: "1625499865985",
      state: "待付款"
    }, {
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579071198,541973577&fm=26&gp=0.jpg",
      merchandise: "VR651631",
      odd: "1625499865985",
      state: "待付款"
    }, {
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1994919799,3021646168&fm=26&gp=0.jpg",
      merchandise: "VR游戏开发",
      odd: "1354864256542",
      state: "配送中"
    }],
    lisp: [],               /**待付款界面 */
    lisy: []                /**配送中界面 */
  },

  seact: function(e) {
    // console.log(e)
    this.setData({
      teet: e.currentTarget.dataset.id
    })
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
    var that = this;
    // console.log("this.data.list.state",this.data.list[2].state);
    for(var i = 0 ; i<this.data.list.length ; i++){
      // console.log("this.data.list.state",this.data.list[i].state);
      var stes = this.data.list[i].state;
      if(stes == "待付款"){
        // console.log("this.data.list[i]",this.data.list[i]);
        lisp.push(this.data.list[i]);
        that.setData({
          lisp:lisp
        })
      }else if(stes == "配送中"){
        // console.log("this.data.list[i]",this.data.list[i]);
        lisy.push(this.data.list[i]);
        that.setData({
          lisy:lisy
        })
      }
    }
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
    // console.log("this.data.lisp",this.data.lisp)
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