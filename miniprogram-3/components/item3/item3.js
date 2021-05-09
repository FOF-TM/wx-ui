Component({

  properties: {
    amount:{
      type: Number,
      value: 20
    },
    start: {
      type: String,
      value: ''
    },
    finish: {
      type: String,
      value: ''
    },
    uid: {
      type: Number,
      value: 0
    },
    date: {
      type: String,
      value: ''
    },
    money: {
      type: Number,
      value: '100'
    },
    post_id: {
      type: Number,
      value: 5
    },
    tag: {
      type: Boolean,
      value: true
    }
  },

  data: {
    collapsed: true
  },

  methods: {
    info: function(event) {
      var id = this.properties.post_id;
      var date = this.properties.date;
      var money = this.properties.money;
      var amount = this.properties.amount;
      
      wx.navigateTo({
        url: '/pages/info/info?id=' + id + "&tag=" + true + "&date=" + date
      })
    },
    finish: function() {
      var list =  getApp().globalData.pullList;
      var datelist = getApp().globalData.dates;
      var date = this.properties.date;
      // var index = this.properties.id;
      var that = this;
      
      
      
      
      
      
      
      wx.showActionSheet({
        itemList: ['确定接单'],
        success (res) {
           wx.request({
             url: "http://yuren123.cn:1011/pending/fetch",
             method: 'POST',
             data: {
              uuid: "07111d4d4e8232c3a2d4c35c02575f64", 
              key: that.properties.post_id
             },
             header: {
               'Content-Type': 'application/json'
                 },
             success(event) {
                //console.log(event);
                console.log(event);
                
               /*if(event.data.code=200){
                wx.showToast({
                 title: '成功',
                icon: 'success',
                duration: 2000
               })
                }*/
              


            } ,
                 fail (res) {
                              console.log(res.errMsg);
                            }
                      })
          
          
          
         /* list[date].splice(index, 1);
          if(list[date].length === 0) 
            datelist.remove(date)
          that.setData({
            tag: false
          })*/
        }
       
      })
    }
  }

})
