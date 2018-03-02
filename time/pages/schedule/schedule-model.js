import { Base } from '../../pages/utils/base.js';

class Schedule  extends Base{
  constructor(){
    super();
  }

  getUserScheduleList(){
    var params = {
      url:'/timeactionList',
      type:'POST',
      sCallBack:function(res){
        callBack && callBack(res.items);
      }
    }
    this.request(params);

  }  

}

export {Schedule};