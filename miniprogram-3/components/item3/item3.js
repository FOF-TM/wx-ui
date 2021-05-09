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
    post_tele:{
      type:String,
      value:''
    } ,  
    post_comments:{
      type:String,
      value:''
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
      var telenumber = this.properties.post_tele;
      var comment = this.properties.post_comments;
      
      wx.navigateTo({
        url: '/pages/info/info?id=' + id + "&telenumber=" + telenumber + "&comment=" + comment
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
             url: getApp().globalData.globalUrl + "/pending/fetch",
             method: 'POST',
             data: {
              uuid:  getApp().globalData.uuid, 
              key: that.properties.post_id
             },
             header: {
               'Content-Type': 'application/json'
                 },
             success(event) {
                //console.log(event);
                
                if(event.data="OK!"){
                  that.setData({
                  tag: false
                })
              }
              


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
