var aldstat = require("./utils/ald-stat.js");
var game_id = 12;
var version = '1.0.0';
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
  },
  jump() {
    var toAppid = 'wx79ade44c39cefc7f';
    wx.setStorageSync('flag', 'false')
    wx.navigateToMiniProgram({
      appId: toAppid,
      path: '?chid=2068&subchid=CQLL',
      // envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  },
  globalData: {
    userInfo: null
  }
})