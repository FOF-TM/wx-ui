// pages/mainpage/mainpage.js
Page({
    data: {
      date:[],
      datalist: new Map(), 
      pagenum: 1
  },
  
  getdatalist: function () { //可在onLoad中设置为进入页面默认加载
    var that = this;
     wx.request({
       url: getApp().globalData.globalUrl + '/pending/query/all/' + that.data.pagenum,
       data: {
         //"key": "某入参value",
         uuid: getApp().globalData.uuid,
        //  "pageNum": that.data.pagenum, //从数据里获取当前页数
        //  "pageSize": 10, //每页显示条数
       },
       method: "GET",
       success: function (res) {
        console.log(res);
        var dataList = that.data.datalist; //从data获取当前datalist数组
        var newdata = res.data; //从此次请求返回的数据中获取新数组
         var dates = that.data.date; 
         var items = res.data.items;
         //console.log(items.length);
         for(var i = 0;i<items.length;i++){
             var date = items[i].timestamp.split(" ")[0];
             if(date in dataList) {
               dataList[date].push(newdata.items[i])
             }
             else {
              dataList[date] = []
              dataList[date].push(newdata.items[i]);
             }
              
            // console.log(newdata.items[i]);
            // console.log(date);
            if(!dates.includes(date)){
              dates.push(date)
            }
            }
           // console.log(dataList);
            that.setData({
              datalist: dataList,
              date: dates
            })
        // var timestamp = time

        //console.log(dates);
         
         
       },
       fail: function (err) { },//请求失败
       complete: function () { }//请求完成后执行的函数
     })
   },  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdatalist();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  /*onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
 /* onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  /*onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  /*onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  /*onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that=this;
    var pagenum = that.data.pagenum + 1; //获取当前页数并+1
    that.setData({
      pagenum: pagenum, //更新当前页数
    })
    that.getdatalist();//重新调用请求获取下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:"分享"
    } 
    
  },
 /*onRefresh(){//刷新
     
      wx.showNavigationBarLoading();  //在当前页面显示导航条加载动画
     
      wx.showLoading({ //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
        title: '刷新中...',
      })
      this.getData();
    },
  
  getData(){//网络请求，获取数据
    wx.request({
          url: 'https://api.sopans.com/third/login.php',
          
          complete(res){//网络请求执行完后将执行的动作
             
              wx.hideLoading(); //隐藏loading 提示框
             
              wx.hideNavigationBarLoading(); //隐藏导航条加载动画
              
              wx.stopPullDownRefresh();//停止下拉刷新
          }
    })   
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作*/
   
  onPullDownRefresh: function () {
      //调用刷新时将执行的方法
    this.onRefresh();
  }
})






/*Page({
  data: {
    pullList: {},
    dates: [],
    current_date: "",
    i: 1,
    j: 1
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
      pullList: app.pullList,
      dates: app.dates
    })
  }

})
*/