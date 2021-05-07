Component({

  properties: {
    content: {
      type: String,
      value: ''
    },
    uid: {
      type: String,
      value: ''
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
