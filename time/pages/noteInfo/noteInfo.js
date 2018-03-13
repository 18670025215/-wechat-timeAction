import {NoteInfo} from 'noteInfo-model.js';
var noteInfo = new NoteInfo();

Page({
  data: {
    id:null,
  },

  onLoad: function (options) {
    var id = options.id;
    var title = options.title;
    this.data.id = id;
    this.data.title = title;
    this._loadData();
  },

  _loadData:function(){
    noteInfo.getDetaileInfo(this.data.id,(data)=>{
      this.setData({
        noteInfo:data,
      });
    });
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title,
    });
  },



})