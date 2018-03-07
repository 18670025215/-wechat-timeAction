import {Base} from '../../utils/base.js';

class Note extends Base{
  constructor(){
    super();
    this._storageKeyName = 'note';
  }

  getUserNoteList(callBack){
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

export {Note};