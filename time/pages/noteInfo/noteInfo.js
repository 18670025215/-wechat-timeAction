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
  },

  addToNote:function(){
    var tempObj = {};
    var keys = ['id', 'title', 'content', 'type', 'group', 'status', 'add_id', 'create_time', 'update_time', 'delte_time', 'finish_time'];

    for(var key in this.data.noteInfo){
      if(keys.indexOf(key) >= 0){
        tempObj[key] = this.data.noteInfo[key];
      }
    }
  }

})