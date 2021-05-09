Component({

  properties: {
    weight: {
      type: String,
      value: ""
    },
    number: {
      type: Number,
      value: ""
    },
    comments: {
      type: String,
      value: ""
    },
    amount: {
      type: Number,
      value: null
    },
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
      var p = this.properties;
      var date = p.date;
      var weight = p.weight;
      var number = p.number;
      var tele = p.tele;
      var stuff_addr = p.stuff_addr;
      var receive_addr = p.receive_addr;
      var comments = p.comments;
      var amount = p.amount;
      wx.navigateTo({
        url: '/pages/detail/detail?date=' + date 
        + '&weight=' + weight 
        + '&number=' + number
        + '&tele=' + tele
        + '&stuff_addr=' + stuff_addr
        + '&receive_addr=' + receive_addr
        + '&comments=' + comments
        + '&amount=' + amount
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
