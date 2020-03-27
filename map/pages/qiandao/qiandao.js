// pages/qiandao/qinadao.js
var util = require('../../utils/util.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",
    qiandao:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    if (app.globalData.qiandao==1){
      this.setData({
        qiandao:"已签到"
      });

    }
    else if(app.globalData.qiandao == 0){
      this.setData({
        qiandao: "点击签到"
      });
    }

  },

  daka:function(){
    wx.navigateTo({
      url: '/pages/WXmap/WXmap'
    })
  }
})