//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    companyTrends: [
      {
        imageUrl: "../images/1.jpg",
        title: "江西农业大学软件学院18级第十二周情况",
        content: " 第十二周的查课情况吧!首先表扬一下这几个班级:1711，1806，1809，1810，1913，物联1901，1901，1911    没有扣分,其他被扣了分的班级，希望可以继续努力，做的越来越好",
        sendTime: "2019-11-18"
      },
      {
        imageUrl: "../images/2.jpg",
        title: "江西农业大学软件学院18级第十一周情况",
        content: " 第十一周查课情况首先呢，很开心，第十一周所查班级，没有一个班级有缺到的情况其次，大家也不要骄傲，要继续保持，再接再厉，争取做得更好",
        sendTime: "2019-11-10"
      },
      {
        imageUrl: "../images/3.jpg",
        title: "江西农业大学软件学院18级第十周情况",
        content: "第十周查课情况，首先还是要先表扬一下没有缺到情况的班级:1901，1904，1905，1906，1907，1908，1909，1910，1911，1912，1913，物联1901,另外就要提醒一下有缺到情况的班级了:1902，1903，希望这两个班级继续努力，别的班级可以做到，我们也一定能行。",
        sendTime: "2019-11-2"
      },
    ],
    imagUrls: ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg"],
    bannerUrls: ["../images/4.png", "../images/5.png", "../images/6.jpg"],
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
