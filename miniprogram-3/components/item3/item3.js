Component({

  properties: {
    amount:{
      type: Number,
      value: ''
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
    info: function(event) {
      var id = this.properties.uid;
      var date = this.properties.date;
      var money = this.properties.money;
      var amount = this.properties.amount;
      console.log(id);
      wx.navigateTo({
        url: '/pages/info/info?id=' + id + "&tag=" + true + "&date=" + date
      })
    },
    finish: function() {
      var list =  getApp().globalData.pullList;
      var datelist = getApp().globalData.dates;
      var date = this.properties.date;
      var index = this.properties.id;
      var that = this;
      wx.showActionSheet({
        itemList: ['确定接单'],
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
