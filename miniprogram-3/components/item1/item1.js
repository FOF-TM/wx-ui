Component({

  properties: {
    tele: {
      type: String,
      value: ''
    },

    stuff_addr: {
      type: String,
      value: ''
    },

    receive_addr: {
      type: String,
      value: ''
    },

    uid: {
      type: Number,
      value: 0
    },

    key: {
      type: Number,
      value: null
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

      // 订单完成
      wx.showActionSheet({
        itemList: ['确定订单完成'],
        success (res) {
          wx.request({
            url: 'http://yuren123.cn:1011/active/finish',
            data: {
              uuid: "07111d4d4e8232c3a2d4c35c02575f64",
              key: that.properties.key
            },
            method: "POST",
            success: res=> {
              that.setData({
                tag: false
              })
              console.log(res);
            }
          })
        },
        fail (res) {
          console.log(res.errMsg)
        }
      })
    }
  }
})
