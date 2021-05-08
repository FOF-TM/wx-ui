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
      comments: NoticeK,
      stuff_weight: WeightK,
      stuff_number: AmountK, 
      stuff_address: GetPlaceK,
      receive_address: DefiniteK,
      amount: PaymentK,
      output: "json"
    };
    /*var url = "; /*这里是服务器的域名 */
    wx.request({
        url: "http://yuren123.cn:1011/pending/add",
        method: 'POST',
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