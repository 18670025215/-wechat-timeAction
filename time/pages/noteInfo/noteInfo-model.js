import {Base} from  '../../utils/base.js';

class NoteInfo extends Base{
  constructor(){
    super();
    this._storageKeyName = 'noteInfo';
  }

  getDetaileInfo(id,callback){
    var params = {
      url:'note/'+id,
      type: 'POST',
      sCallBack:function(res){
        callback && callback(res);
      }
    }
    this.request(params);
  }


  
}

export {NoteInfo};