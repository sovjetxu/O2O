// pages/index/tabbar/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxs:{
      name:"李袁宇",
      phone:18239876546
    },
    weizhi:"",
    gongsi:"",
  },

  dizhi:function(){                   //(家)位置按钮
    wx.getSetting({                   //查询设置的权限
      success:(result) => {     
        // console.log("设置",result);   //成功回调
        if(result.authSetting["scope.userLocation"]!=true){   //判断位置信息是否开启
          // console.log("该设置真了");
          wx.showModal({              //动态消息提示
            title: '提示',
            content: '您的位置权限未打开，是否打开',
            success (res) {
              if (res.confirm) {
                // console.log('用户点击确定');
                  wx.openSetting({    //开启设置界面
                    success (res) {
                      // console.log(res.authSetting)
                    }
                  })
              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
          
        }
      },
      fail:(res) =>{},
      complete: (res) => {
        // console.log("回调：",res);
      },
    })
    wx.chooseLocation({             //打开地图选择位置
      latitude: 0,
      longitude: 0,
      success: (result) => {
        // console.log("位置信息",result);
        this.setData({
          weizhi:result.address
        })
      },
      fail: (res) => {
        // console.log("失败",res);
      },
      complete: (res) => {
        // console.log("回调：",res);
      },
    })
  },
  gongsi:function(){                  //(公司)位置按钮
    wx.getSetting({                   //查询设置的权限
      success:(result) => {     
        // console.log("设置",result);   //成功回调
        if(result.authSetting["scope.userLocation"]!=true){   //判断位置信息是否开启
          // console.log("该设置真了");
          wx.showModal({              //动态消息提示
            title: '提示',
            content: '您的位置权限未打开，是否打开',
            success (res) {
              if (res.confirm) {
                // console.log('用户点击确定');
                  wx.openSetting({    //开启设置界面
                    success (res) {
                      // console.log(res.authSetting)
                    }
                  })
              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
          
        }
      },
      fail:(res) =>{},
      complete: (res) => {
        // console.log("回调：",res);
      },
    })
    wx.chooseLocation({             //打开地图选择位置
      latitude: 0,
      longitude: 0,
      success: (result) => {
        // console.log("位置信息",result);
        this.setData({
          gongsi:result.address
        })
      },
      fail: (res) => {
        // console.log("失败",res);
      },
      complete: (res) => {
        // console.log("回调：",res);
      },
    })
  },

  buton:function(){
    console.log("姓名："+this.data.boxs.name,"联系电话："+this.data.boxs.phone,"收货地址(家)："+this.data.weizhi,"收货地址(公司)"+this.data.gongsi);
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
    // console.log("weizhi"+this.data.weizhi);
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