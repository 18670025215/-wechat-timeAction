import { NoteAdd } from 'noteAdd-model.js';
var noteAdd = new NoteAdd();

Page({
  data: {

  },

  onLoad: function () {
    
  },

  _loadData: function () {
    
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: '新增',
    });
  },

  onAddingToNote: function (event) {
    this.addToNote();
  },

  addToNote: function () {
    var tempObj = {};
    var keys = ['id', 'title', 'content', 'type', 'group', 'status', 'add_id', 'create_time', 'update_time', 'delte_time', 'finish_time'];
    for (var key in this.data.noteInfo) {
      if (keys.indexOf(key) >= 0) {
        tempObj[key] = this.data.noteInfo[key];
      }
    }
    noteAdd.add(tempObj);
  }

})