import {Base} from '../../utils/base.js';

class Note extends Base{
  constructor(){
    super();
    this._storageKeyName = 'note';
  }

  getUserNoteList(page,callBack){
    var params = {
      url:'/noteList',
      type:'POST',
      data: page,
      sCallBack:function(res){
        callBack && callBack(res);
      }
    }
    this.request(params);
  }  

}

export {Note};