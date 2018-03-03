import {Base} from '../../pages/utils/base.js';

class Schedule  extends Base{
  constructor(){
    super();
  }

  getUserScheduleList(callBack){
    var params = {
      url:'/timeactionList',
      type:'POST',
      sCallBack:function(res){
        callBack && callBack(res);
      }
    }
    this.request(params);

  }  

}

export {Schedule};