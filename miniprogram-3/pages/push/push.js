const app = getApp()

Page({
  data:{
    NoticeK: '',
    WeightK: '',
    AmountK:'',
    GetPlaceK: '',
    DefiniteK: '',
    IdentityK: '',
    PhoneNumberK: '',
    WriteK: '',
    PaymentK:'',
    u_id:''
  },
  NoticementInput:function(event){
  this.setData({
    NoticeK:event.detail.value
  })},
  WeightInput:function(event){
    this.setData({
      WeightK:event.detail.value
    })},
  AmountInput:function(event){
      this.setData({
        AmountK:event.detail.value
      })},
  GetPlaceInput:function(event){
        this.setData({
          GetPlaceK:event.detail.value
        })},
  DefiniteInput:function(event){
          this.setData({
            DefiniteK:event.detail.value
          })},
  IdentityInput:function(event){
            this.setData({
              IdentityK:event.detail.value
            })},
  PhoneNumberInput:function(event){
              this.setData({
                PhoneNumberK:event.detail.value
              })},
  WriteInput:function(event){
                this.setData({
                  WriteK:event.detail.value
                })},
  PaymentInput:function(event){
                  this.setData({
                    PaymentK:event.detail.value
                  })},

                  onLoad: function (options) {
                    if (wx.getUserProfile) {
                      this.setData({
                        canIUseGetUserProfile: true,
                        PostTeleNumber:true
                      })
                    }
                  },
                 /* GetTeleNumber:function(){
                     wx.request({
                      url: "http://172.22.18.44:5000/me/tele/update",  //后台接口
                      data:{
                       uuid: getApp().globalData.uuid,
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
                              url: "http://172.22.18.44:5000/auth/login",  //后台接口
                              data:{
                                "code": res.code,
                                "appid": "wxe36d7548e4c6149f",
                                "secret": "5c8ddb80948479c0d5262d076bf08a36",
                                "raw_data": this.data.rawData,
                                "signature": this.data.signature
                              },   //传递给后台使用的code
                              method:"POST",
                              success:function(resa){
                                console.log(resa);
                                // that.data.uuid = res.uuid
                                wx.request({
                                  url: "http://172.22.18.44:5000/test/loginTest",
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
                  },*/

    pushInfo:function(event){
    var NoticeK=this.data.NoticeK;
    var WeightK=this.data.WeightK;
    var AmountK=this.data.AmountK;
    var  GetPlaceK=this.data. GetPlaceK;
    var DefiniteK=this.data.DefiniteK;
    var IdentityK=this.data.IdentityK;
    var PhoneNumberK=this.data.PhoneNumberK;
    var WriteK=this.data.WriteK;
    var PaymentK=this.data.PaymentK;
   
    
    
    var data={
      loginfrom:"app",
      comments: WriteK,
      stuff_weight: WeightK,
      stuff_number: AmountK, 
      stuff_address: GetPlaceK,
      receive_address: DefiniteK,
      amount: PaymentK,
      uuid:getApp().globalData.uuid,
      output: "json"
    };
    /*var url = "; /*这里是服务器的域名 */
    wx.request({
        url: getApp().globalData.globalUrl + "/pending/add",
        method: 'POST',
        data: data,
        header: {
          'Content-Type': 'application/json'
        },
        success(res) {
          console.log(res.data)
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          /*if(res.data.code=200){
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            }*/
          }, 
            
          fail(res){
              wx.showToast({
                title: '提交失败',
                icon: 'fail',
                duration: 2000
            })
         }    
        })   
     }  
    })