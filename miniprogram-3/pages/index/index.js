Page({
  f0:function(event){
    wx.navigateTo({
      url: '/pages/push/push',
    })
  },
  f1:function(event){
    wx.navigateTo({
      url: '/pages/pull/pull',
    })
  },
  GetTeleNumber:function(){
    wx.request({
     url: "http://yuren123.cn:1011/me/tele/update",  //后台接口
     data:{
      uuid: getApp().globalData.data.uuid,
      tele:"13390121840"
     },   //传递给后台使用的code
     method:"POST",
     success:function(resa){
       console.log(resa);
     }
    })
 },

 getUserProfile: function() {
   wx.getUserProfile({
     desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
     success: (res) => {
       console.log("123");
       console.log(res.rawData);
       this.setData({
         rawData: res.rawData,
         signature: res.signature,
         userInfo: res.userInfo,
       })
       wx.login({
         success: res => {
           var that = this
           wx.request({
             url: "http://yuren123.cn:1011/auth/login",  //后台接口
             data:{
               "code": res.code,
               "appid": "wxa492b8f990c466b7",
               "secret": "aa9d35aeef00ee1e9757c4bfb5e96499",
               "raw_data": this.data.rawData,
               "signature": this.data.signature
             },   //传递给后台使用的code
             method:"POST",
             success:function(resa){
               console.log(resa);
               // that.data.uuid = res.uuid
               wx.request({
                 url: "http://yuren123.cn:1011/test/loginTest",
                 method: "POST",
                 data: {
                   uuid: resa.data.uuid
                 },
                 success: function(res) {
                   getApp().globalData.data = resa.data;
                   console.log(resa.data.uuid);
                   console.log(res);
                 }
               })
             }
           })
         }
       })
     }
   })
 },
})