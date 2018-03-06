import { Note } from 'note-model.js';
var note = new Note();

Page({

  data: {
  },

  onLoad: function () {
    this._loadData();
  },

  _loadData: function () {
    var data = note.getUserNoteList((res) => {
      this.setData({
        'timeArr': res
      });
    });
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: '记事本'
    });
  },

  onNoteInfo: function (event) {
    var id = note.getDataSet(event, 'id');
    var title = note.getDataSet(event, 'title');
    wx.navigateTo({
      url: '../noteInfo/noteInfo?id=' + id + '&title=' + title,
    });
  }



})

