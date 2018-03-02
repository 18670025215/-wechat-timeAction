import { Schedule } from 'schedule-model.js';
var schedule = new Schedule();

Page({

  data: {
  
  },
 
  onLoad:function(){
    this._loadData();
  },

  _loadData:function(){
    var id = 1;
    var $data = schedule.getUserScheduleList(id,(res)=>{
      console.log(res);
    });
  },

  callBack:function(res){
    console.log(res);  
  }

})

