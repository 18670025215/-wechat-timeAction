import {Base} from '../../utils/base.js';

class Note extends Base{
  constructor(){
    super();
  }

  /*新增记事本*/
  add(item,counts){
    var noteDataa = this.getNoteLocal();
  }

  getNoteLocal(){
    var res = wx.getStorageInfoSync(this._storageKeyName);
    if (!res) {
      res = [];
    }
    return res;
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