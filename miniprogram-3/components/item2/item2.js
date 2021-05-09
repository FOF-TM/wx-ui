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
      wx.showActionSheet({
        itemList: ['确定订单完成'],
        success (res) {
          console.log(res.tapIndex)
        },
        fail (res) {
          console.log(res.errMsg)
        }
      })
    }
  }
})
