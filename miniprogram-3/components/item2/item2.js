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
      console.log(id);
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id + "&tag=" + false
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
