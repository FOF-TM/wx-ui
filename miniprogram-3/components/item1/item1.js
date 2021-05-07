Component({

  properties: {
    content: {
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
    tag: {
      type: Boolean,
      value: true
    }
  },

  data: {
    collapsed: true
  },

  methods: {
    detail: function(event) {
      var id = this.properties.uid;
      var date = this.properties.date;
      console.log(id);
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id + "&tag=" + true + "&date=" + date
      })
    },
    finish: function() {
      var list =  getApp().globalData.orderList;
      var datelist = getApp().globalData.dates;
      var date = this.properties.date;
      var index = this.properties.id;
      var that = this;
      wx.showActionSheet({
        itemList: ['确定订单完成'],
        success (res) {
          list[date].splice(index, 1);
          if(list[date].length === 0) 
            datelist.remove(date)
          that.setData({
            tag: false
          })
        },
        fail (res) {
          console.log(res.errMsg)
        }
      })
    }
  }
})
