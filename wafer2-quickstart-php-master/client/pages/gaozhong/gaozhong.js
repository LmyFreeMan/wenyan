var title = getApp().globalData.title;
var autor = getApp().globalData.autor;
var content = getApp().globalData.content;
Page({
  data:
  {
    flag: 'flag'
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.gxfwz36524.com/server/Gaozhong',
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          requestNum: res.data.data.num,
          requestAutor: res.data.data.autor,
          requestTitle: res.data.data.title,
          requestData: res.data.data,
        })
        var err = res.data.error
      }
    })
  },
  flag: function (e) {
    var that = this;
    console.log(e.target.id);
    wx.request({
      url: 'http://www.gxfwz36524.com/server/Gaozhongcontent',
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data:
      {
        name: e.target.id
      },
      success: function (res) {
        var title = res.data.data.title;
        var autor = res.data.data.autor;
        var content = res.data.data.content;
        var translate = res.data.data.translate;
        console.log(res);
        that.setData({
          title: res.data.data.title,
          autor: res.data.data.autor,
          content: res.data.data.content,
          translate: res.data.data.translate
        })
        wx.navigateTo({
          url: '../chuzhongcontent/chuzhongcontent?title=' + title + '&&autor=' + autor + '&&content=' + content + '&&translate=' + translate
        })
        var err = res.data.error
      }
    })
  }
})