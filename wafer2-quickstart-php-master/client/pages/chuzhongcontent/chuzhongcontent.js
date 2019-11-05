Page({
  onLoad: function (options) {
    console.log(options);
    this.setData({
      title: options.title,
      autor:options.autor,
      content:options.content,
      translate: options.translate
    })
  }    

})