import { Note } from 'note-model.js';
var note = new Note();

Page({

  data: {
    pageindex: 1,
    pageCount: '', 
    height: '',
    items: [],
    resArr:[],
    startX: 0, //开始坐标
    startY: 0,
  },
  
  onShow: function () {
    this._loadData();
  },

  topper(){
    var that = this;
    var result = this.data.items;
    var resArr = {};   
    console.log(this.data.pageindex);
  },

  lower() {
    var that = this;
    var result = this.data.items;
    var resArr = {};
    this.setData({
      pageindex: (this.data.pageindex+1)
    });
    var data = note.getUserNoteList(this.data.pageindex, (res) => {
      that.setData({
        'resArr':res.data 
      });
      var cont = result.concat(that.data.resArr);
      if (this.data.pageindex > this.data.pageCount) {
        wx.showToast({ //如果全部加载完成了也弹一个框
          title: '全部数据加载完成',
          icon: 'success',
          duration: 800
        });
        return false;
      } else {
        wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
          title: '加载中',
          icon: 'loading',
        });
        setTimeout(() => {
          this.setData({
            'items': cont
          });
          wx.hideLoading();
        }, 300)
      }
    }); 
  },

  onLoad: function () {
    this._loadData();
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
  },

  _loadData: function () {
    var data = note.getUserNoteList(this.data.pageindex,(res) => {
      this.setData({
        'items': res.data,
        'pageCount': res.pageCount
      });
    });
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: '日程列表'
    });
  },

  onNoteInfo: function (event) {
    var id = note.getDataSet(event, 'id');
    var title = note.getDataSet(event, 'title');
    wx.navigateTo({
      url: '../noteInfo/noteInfo?id=' + id + '&title=' + title,
    });
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      items: that.data.items
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  //删除事件
  del: function (e) {
    this.data.items.splice(e.currentTarget.dataset.index, 1)
    var data = note.delNote(e.currentTarget.dataset.id, (res) => {
      this.setData({
        items: this.data.items
      })
    });
  },

  //置顶时间
  top:function(e){
    var data = note.checkTop(e.currentTarget.dataset.id, (res) => {
     
    });
  },

  checkboxChange:function(e){
    var data = note.finish(e.currentTarget.dataset.id, (res) => {

    });
  },

  //下拉刷新
  onPullDownRefresh:function(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    console.log('11');
    wx.stopPullDownRefresh();
  }



})

