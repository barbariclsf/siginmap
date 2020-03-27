const app = getApp();
Page({
  
  data:{
    list:[]
  },

  
  onLoad:function(){
    if (app.globalData.loginStatus == 1){
      this.record();
    }else{
      wx.showModal({
        title: '提示',
        content: '未登录,无签到信息',
      })

    }
  },
  record: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/WxSigin/recordServlet',
      data: {
      },
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        that.setData({
          list: res.data
        })
      }
    })

  }
})