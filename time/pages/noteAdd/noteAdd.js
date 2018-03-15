import { NoteAdd } from 'noteAdd-model.js';
var noteAdd = new NoteAdd();

var util = require('../../utils/util.js');

Page({
  data: {
    showTopTips: false,
    group: ['个人', '工作'],
    group_num:0,
    date: util.formatDate(new Date),
    time: util.formatTime(new Date)
  },

  onShow:function(){
    
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
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindGroupChange:function(e) {
    this.setData({
      group_num: e.detail.value
    })
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
  },

  formSubmit: function (e,callback) {
    var that = this;
    var formData = e.detail.value;
    var group_id = that.data.group_num;

    if(formData.content == ''){
      this.setData({
        showTopTips: true
      });
      setTimeout(function () {
        that.setData({
          showTopTips: false
        });
      }, 2000);
      return false;
    }
   
    var params = {
      url: 'noteAdd',
      type: 'POST',
      data: {"formData":formData,"group_id":group_id},
      sCallBack: function (res) {
        that.setData({
          title:'',
          content:'',
          group_num:0,
          date: util.formatDate(new Date)
        });
        wx.switchTab({
          url: '../note/note',
        }) 

      }
    }
    noteAdd.request(params);

    
  }


})