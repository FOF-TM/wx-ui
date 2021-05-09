Page({
  data: {
    page: 1,
    orderList: {},
    dates: []
  },

  //上拉到底时需执行的操作
  onReachBottom: function() {
    console.log(this.data.page++);
    var that = this;
    wx.request({
      url: getApp().globalData.globalUrl + '/active/query/i-fetch/' + this.data.page,
      method: "GET",
      data: {
        uuid: getApp().globalData.uuid
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
      url: getApp().globalData.globalUrl + '/active/query/i-fetch/1',
      method: "GET",
      data: {
        uuid: getApp().globalData.uuid
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
