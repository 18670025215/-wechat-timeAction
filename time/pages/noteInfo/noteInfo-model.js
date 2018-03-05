import {Base} from  '../../utils/base.js';

class NoteInfo extends Base{
  constructor(){
    super();
  }

  getDetaileInfo(id,callback){
    var param = {
      url:'note/'+id,
      type: 'POST',
      sCallback:function(data){
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export {NoteInfo};