Page({
  data: {
    orderList: new Map(),
    dates: [],
    page: 1
  },

  //上拉到底时需执行的操作
  onReachBottom: function() {
    console.log(this.data.page++);
    var that = this;
    wx.request({
      url: getApp().globalData.globalUrl + '/active/query/i-add/' + this.data.page,
      method: "GET",
      data: {
        uuid: "07111d4d4e8232c3a2d4c35c02575f64"
      },
      success: res => {
        if(res.statusCode !== 200) {
          return;
        }
        console.log(res);
        var dataList = this.data.orderList;
        var dates = this.data.dates;
        var newdata = res.data;
        var items = res.data.items;

        for(var i = 0;i<items.length;i++) {
          var date = items[i].timestamp.split(" ")[0];
          if(date in dataList) {
            dataList[date].push(newdata.items[i])
          }
          else {
           dataList[date] = []
           dataList[date].push(newdata.items[i]);
          }
           
          console.log(newdata.items[i]);
          console.log(date);
         if(!dates.includes(date)){
           dates.push(date)
         }
        }

        that.setData({
          orderList: dataList,
          dates: dates
        })
      }
    })
  },

  onLoad: function() {
    var that = this;
    wx.request({
      url: getApp().globalData.globalUrl + '/active/query/i-add/1',
      method: "GET",
      data: {
        uuid: "07111d4d4e8232c3a2d4c35c02575f64"
      },
      success: res => {
        console.log(res);
        var dataList = this.data.orderList;
        var dates = this.data.dates;
        var newdata = res.data;
        var items = res.data.items;

        for(var i = 0;i<items.length;i++) {
          var date = items[i].timestamp.split(" ")[0];
          if(date in dataList) {
            dataList[date].push(newdata.items[i])
          }
          else {
           dataList[date] = []
           dataList[date].push(newdata.items[i]);
          }
           
          console.log(newdata.items[i]);
          console.log(date);
         if(!dates.includes(date)){
           dates.push(date)
         }
        }

        that.setData({
          orderList: dataList,
          dates: dates
        })
      }
    })
  }

})
