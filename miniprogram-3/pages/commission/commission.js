Page({
  data: {
    i: 1,
    j: 1,
    orderList: {},
    dates: []
  },

  //上拉到底时需执行的操作
  onReachBottom: function() {
    console.log(this.data.i++);
  },

  //下拉刷新需要执行的操作
  onPullDownRefresh: function() {
    console.log("fresh" + this.data.j++);
  },

  onLoad: function() {
    var app = getApp().globalData;
    this.setData({
      orderList: app.orderList,
      dates: app.dates
    })
  }

})
