import {Schedule} from 'schedule-model.js';
var schedule = new Schedule();

Page({

  data: {
  },
 
  onLoad:function(){
    this._loadData();
  },

  _loadData:function(){
    var data = schedule.getUserScheduleList((res)=>{
      this.setData({
        'timeArr':res
      });
    });
  },

  onScheduleInfo:function(event){
    var id = schedule.getDataSet(event,'id');
    wx.navigateTo({
      url: '../scheduleInfo/scheduleInfo?id='+id,
    });  
  }

  

})

