import {NoteInfo} from 'noteInfo-model.js';
var noteInfo = new NoteInfo();

Page({
  data: {
    id:null,
    name:null
  },

  onLoad: function (options) {
    var id = options.id;
    this.data.id = id;
    this._loadData();
  },

  _loadData:function(){
    noteInfo.getDetaileInfo(this.data.id,(data)=>{
      this.setData({
        noteInfo:data  
      });
    });
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.id,
    });
  }

})