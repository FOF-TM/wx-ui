// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "2021/5/30",
    weight: "20kg",
    number: "2",
    tele: "13312296386",
    stuff_addr: "食堂",
    receive_addr: "五舍A414",
    comments: "速度",
    amount: "10元"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
    console.log(opt)
    this.setData({
      date: opt.date,
      weight: opt.weight,
      number: opt.number,
      tele: opt.tele,
      stuff_addr: opt.stuff_addr,
      receive_addr: opt.receive_addr,
      comments: opt.comments,
      amount: opt.amount
    })
  },
    


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showActionSheet({
      itemList: ['确定订单完成'],
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})