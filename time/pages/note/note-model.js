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
      data:{'page': page},
      sCallBack:function(res){
        callBack && callBack(res);
      }
    }
    this.request(params);
  }  

  delNote(id, callBack) {
    var params = {
      url: '/delNote',
      type: 'POST',
      data: { 'id': id },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

  checkTop(id,callBack){
    var params = {
      url: '/noteInfoTop',
      type: 'POST',
      data: { 'id': id },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);  
  }

  finish(id, callBack) {
    var params = {
      url: '/noteFinish',
      type: 'POST',
      data: { 'id': id },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

}

export {Note};