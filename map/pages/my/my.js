const app = getApp();

Page({
  data: {
    logs: []
  },
  onLoad: function() {

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
      
    } else if (app.globalData.loginStatus == 1){
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
    wx.removeStorage({
      key: 'username'
    })

    wx.reLaunch({
      url: '/pages/index/index'
    })
  }
})