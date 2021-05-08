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
    PaymentK:''
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
      NoticeK: NoticeK,
      WeightK: WeightK,
      AmountK: AmountK, 
      GetPlaceK: GetPlaceK,
      DefiniteK: DefiniteK,
      IdentityK: IdentityK,
      PhoneNumberK: PhoneNumberK,
      WriteK: WriteK,
      PaymentK: PaymentK,
      output: "json"
    };
    /*var url = "; /*这里是服务器的域名 */
    wx.request({
        url: "https://api.sopans.com/third/login.php",
        method: 'GET',
        data: data,
        header: {
          'Content-Type': 'application/json'
        },
        success(res) {
          if(res.data.code=200){
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
        }
        }
   
      })
   



    }  
    })