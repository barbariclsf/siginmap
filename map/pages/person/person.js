//person.js
const app = getApp();

Page({
  data: {
    logs: [],
    jilu:"签到记录",
  },
  onLoad: function () {
    if (app.globalData.loginStatus == 0) {
      wx.showModal({
        title: '提示',
        content: '请先登录~',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login'
            })
          }
        }
      })

    } else if (app.globalData.loginStatus == 1) {
      let username = wx.getStorageSync('username');
      console.log('username', username)
      this.setData({
        username: username
      })
    }

  },

  /**
   * 退出登录
   */
  logout: function() {
    app.globalData.loginStatus = 0;
    app.globalData.qiandao = 0;
    wx.removeStorage({
      key: 'username'
    })
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  record:function(){
    wx.navigateTo({
      url: '/pages/record/record'
    })

  },
  message:function(){
    wx.navigateTo({
      url: '/pages/usermessage/usemessage'
    })
  },
  aboutme:function(){
    wx.navigateTo({
      url: '/pages/aboutme/aboutme'
    })
  }
})
