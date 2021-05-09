// pages/setting/setting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        testInfo: null,
        hasUserInfo: false,
        canIUseGetUserProfile: false, 
    },

    delete(event){
        var that = getApp().globalData;
        var tmp = this
        var id = event.currentTarget.dataset.id;
        wx.showActionSheet({
          itemList: ["确认删除该地址"],
            success(){
                wx.request({
                    url: 'http://yuren123.cn:1011/me/addr/delete',
                    data:{
                        "uuid": "cc837ec6684a32e997e5c5010c9e1a2c",
                        "addrs": [that.data.addr[id].key]
                    },
                    method:"POST",
                    success(res){
                        that.data.addr.splice(id,1);
                        tmp.setData({
                            testInfo: tmp.data.testInfo
                        })
                    }
                  })
            },
            fail(){
            }
        })
    },

    confirmTele(){
        var that = getApp().globalData;
        var tmp = this
        wx.showActionSheet({
          itemList: ["确认修改手机号"],
            success(res){
                wx.request({
                    url: 'http://yuren123.cn:1011/me/tele/update',
                    data:{
                        "uuid": "cc837ec6684a32e997e5c5010c9e1a2c",
                        "tele": that.data.tele
                    },
                    method:"POST",
                    success(res){
                        tmp.setData({
                            testInfo: tmp.data.testInfo
                        })
                        console.log(res);
                    }
                  })
            }, 
            fail(){
                
            }
        })
    },

    add(event){
        var that = getApp().globalData;
        var tmp = this
        wx.showActionSheet({
          itemList: ["确认添加新地址"],
            success(){
                    wx.request({
                      url: 'http://yuren123.cn:1011/me/addr/add',
                      data:{
                          "uuid": "cc837ec6684a32e997e5c5010c9e1a2c",
                          "addrs": [""]
                      },
                      method:"POST",
                      success(res){
                        that.data.addr.push({"key": res.data.new_addrs["0"].key,"location": ""});
                        tmp.setData({
                            testInfo: tmp.data.testInfo
                        })
                        console.log(res);
                      }
                    })
                },
            fail(){
                }
        })
    },

    confirm(event){
        var that = getApp().globalData;
        var tmp = this
        var id = event.currentTarget.dataset.id
        wx.showActionSheet({
          itemList: ["确认修改该地址"],
        success(){
            wx.request({
                url: 'http://yuren123.cn:1011/me/addr/update',
                data:{
                    "uuid": "cc837ec6684a32e997e5c5010c9e1a2c",
                    "addrs": [{"key":that.data.addr[id].key,"location":that.data.addr[id].location}]
                },
                method:"POST",
                success(res){
                    tmp.setData({
                        testInfo: tmp.data.testInfo
                    })
                    console.log(res);
                }
              })
        },
        fail(){
        }
        })
    },

    inputTele(e){
        getApp().globalData.data.tele = e.detail.value
    },

    input(e){
        var id = e.currentTarget.dataset.id;
        getApp().globalData.data.addr[id]["location"] = e.detail.value
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            "testInfo": getApp().globalData.data
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
        this.setData({
            "testInfo": getApp().globalData.data
        })
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