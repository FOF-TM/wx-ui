// app.js
App({
  onLaunch() {
    Array.prototype.remove = function(val) { 
      var index = this.indexOf(val); 
      if (index > -1) { 
      this.splice(index, 1); 
      } 
    };
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    var rawData
    var signature
    wx.getUserInfo({
      success: res => {
        rawData = res.rawData
        //console.log(rawData)
        signature = res.signature
      }
    })
    // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //       wx.request({
  //         url: "http://yuren123.cn:1011/login",  //后台接口
  //         data:{
  //           "code": res.code,
  //           "appid": "wxa492b8f990c466b7",
  //           "secret": "aa9d35aeef00ee1e9757c4bfb5e96499",
  //           "rawData": rawData,
  //           "signature": signature
  //         },   //传递给后台使用的code
  //         method:"POST",
  //         success:function(res){
  //           console.log(rawData)
  //           console.log(signature)
  //           console.log(res)
  //         }

  //       })
  //     }
  //   })
  },
  globalData: {
    userInfo: null,
    orderList: {
      "2021-4-30": [
        {content: "到浴室取快递", id: "0", date: "2021-4-30"}, 
        {content: "到食堂取快递", id: "1", date: "2021-4-30"}
      ],
      "2021-4-28": [
        {content: "到浴室取快递", id: "0", date: "2021-4-28"}, 
        {content: "到食堂取快递", id: "1", date: "2021-4-28"},
        {content: "到浴室取快递", id: "3", date: "2021-4-28"}, 
        {content: "到食堂取快递", id: "4", date: "2021-4-28"}
      ]},
      pullList:{
        "2021-4-30":[  
          {amount:"1", start:"东北大学浑南校区图书馆",finish:"东北大学生科楼",money:"10",id:"0",date: "2021-4-30"},
          {amount:"1", start:"东北大学一舍",finish:"东北大学文管楼",money:"10",id:"1",date: "2021-4-30"}
        ],
        "2021-4-28":[  
          {amount:"1", start:"东北大学小西门",finish:"东北大学东门",money:"10",id:"0", date: "2021-4-28"},
          {amount:"2", start:"东北大学五舍",finish:"风雨操场",money:"20",id:"1", date: "2021-4-28"},
          {amount:"3", start:"东北大学西门",finish:"小南湖",money:"10",id:"2", date: "2021-4-28"},
          {amount:"2", start:"东北大学南湖校区",finish:"东北大学浑南校区",money:"50",id:"3", date: "2021-4-28"}
        ]},
      
     
      
    
    dates: [
      "2021-4-30",
      "2021-4-28"
    ]
  }
})
