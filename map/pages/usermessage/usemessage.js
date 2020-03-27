const app = getApp();
Page({
  data: {
    username: "",
    number: 20182111,
    school: "江西农业大学",
    yuan: "软件学院",
    sclass: "软件1812"

  },
  onLoad: function() {

    if (app.globalData.loginStatus == 1) {
      console.log("1");
      this.setData({
        username: app.globalData.username
      })
    }
    else if (app.globalData.loginStatus == 0) {
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

    }
  }
})