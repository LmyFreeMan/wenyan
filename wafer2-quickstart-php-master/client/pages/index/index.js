  //index.js
var title = getApp().globalData.title;
var autor = getApp().globalData.autor;
var content = getApp().globalData.content;
//获取应用实例
Page({
  data: {
    name:'',
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ],
  },
  //事件处理函数
formSubmit: function(e) {
  var that = this
  console.log(e);
  wx.request({
    url: 'http://www.gxfwz36524.com/server/demo/index',
    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data:
    {
      name: e.detail.value.name
    },
    success:function(res)
    {
      console.log(res)
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
    }
  })
},
search:function(e)
{
   var that=this;
  console.log(e)
  console.log(e.detail.value)
  wx.request({
    url: 'http://www.gxfwz36524.com/server/Search',
    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data:
      {
        name: e.detail.value
      },
      success:function(res)
      {
        console.log(res.data.data.title[0].title)
        console.log(typeof (res.data.data.title[0].title))
       var ss = res.data.data.title[0].title.split(",")
        that.setData({
          bindSource:ss
        })

      }
})
}
,
change:function(e)
{
  console.log(e)
  console.log(e.currentTarget.id)
  this.setData({
    name:e.currentTarget.id,
    bindSource:''
  })
},
chuzhong: function () {
  wx.navigateTo({
    url: '../../pages/chuzhong/chuzhong'　　
  })
},
  gaozhong: function () {
    wx.navigateTo({
      url: '../../pages/gaozhong/gaozhong'
    })
},
  onShareAppMessage: function () {
    return {
      title: '文言天地',
      path: '/pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  }
})
