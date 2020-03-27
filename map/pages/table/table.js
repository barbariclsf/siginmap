const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wlist: [
      //上课长度全部默认为两节课
      { "xqj": 1, "sksj": 1, "skcd": 2, "kcxx": "java E-218 1~16周" },
      { "xqj": 1, "sksj": 3, "skcd": 2, "kcxx": "概率论 E-204 1~16周" },
      { "xqj": 1, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 1, "sksj": 8, "skcd": 2, "kcxx": "英语阅读 E-515 1~16周" },
      { "xqj": 1, "sksj": 10, "skcd": 2, "kcxx": "" },
    
      { "xqj": 2, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 3, "skcd": 2, "kcxx": "java E-414 1~16周" },
      { "xqj": 2, "sksj": 6, "skcd": 2, "kcxx": "数据库 E-402 1~16周" },
      { "xqj": 2, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 10, "skcd": 2, "kcxx": "" },
      
      { "xqj": 3, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 3, "skcd": 2, "kcxx": "数据库 E-402 4~12周" },
      { "xqj": 3, "sksj": 6, "skcd": 2, "kcxx": "英语听力 E-512 1~16周" },
      { "xqj": 3, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 10, "skcd": 2, "kcxx": "" },
      
      { "xqj": 4, "sksj": 1, "skcd": 2, "kcxx": "概率论 E-201 1~16周" },
      { "xqj": 4, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 6, "skcd": 2, "kcxx": "乒乓球 未定 1~16周" },
      { "xqj": 4, "sksj": 8, "skcd": 2, "kcxx": " 实验楼0216 4~16周" },
      { "xqj": 4, "sksj": 10, "skcd": 2, "kcxx": "" },
      
      { "xqj": 5, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 3, "skcd": 2, "kcxx": "英语写作 E-515 1~16周" },
      { "xqj": 5, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 8, "skcd": 2, "kcxx": "概率论 E-204 1~16周" },
      { "xqj": 5, "sksj": 10, "skcd": 2, "kcxx": "" },
     
      { "xqj": 6, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 10, "skcd": 2, "kcxx": "" },
    
      { "xqj": 7, "sksj": 1, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 3, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 6, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 8, "skcd": 2, "kcxx": "  " },
      { "xqj": 7, "sksj": 10, "skcd": 2, "kcxx": "" },
     
    ],
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    } 
    
  
  
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