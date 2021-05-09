<<<<<<< HEAD
Page({
  data: {
    userInfo: {},
    testInfo: null,
    rawData:"",
    signature: "",
    hasUserInfo: false,
    canIUseGetUserProfile: false ,
    count:0
  },
  onLoad() {
    this.data.testInfo = getApp().globalData.data
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  onShow(){
    this.setData({
      testInfo: this.data.testInfo
    })
  },

  getUserProfile: function() {
    var that = this
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.rawData);
        this.setData({
          rawData: res.rawData,
          signature: res.signature,
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.login({
          success: res => {
            wx.request({
              url: "http://yuren123.cn:1011/auth/login",  //后台接口
              data:{
                "code": res.code,
                "appid": "wxeaec94a0f4b07c10",
                "secret": "496746b7467d6de2aaf4b9a219440c4f",
                "raw_data": this.data.rawData,
                "signature": this.data.signature
              },   //传递给后台使用的code
              method:"POST",
              success:function(res){
                console.log(that.data.testInfo);
                console.log("Equal: ", that.data.testInfo === getApp().globalData.data);
                that.setData({
                  "testInfo.tele" : res.data.tele,
                  "testInfo.addr" : res.data.addr
                })
                console.log("Equal: ", that.data.testInfo === getApp().globalData.data);
                console.log(res);
                console.log(getApp().globalData.data);
              }
            })
          }
        })
      }
    })
  },


  historyRecordsOrder() {
      wx.navigateTo({
        url: '/pages/historyorder/historyorder',
      })
  },

  historyRecordsTake() {
    wx.navigateTo({
      url: '/pages/historytake/historytake',
    })
},

  setting() {
      wx.navigateTo({
        url: '/pages/setting/setting',
      })
  },

=======
Page({
  data: {
    userInfo: {},
    testInfo: {
        address:["五舍A414","食堂","一号楼B321"],
        phoneNumber: "13674216836",
    },
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    
  },
>>>>>>> ddac8e102eb353c2a2f328a9805ed5784f87b4a6
})