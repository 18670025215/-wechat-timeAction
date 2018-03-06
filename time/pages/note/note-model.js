import {Base} from '../../utils/base.js';

class Note extends Base{
  constructor(){
    super();
    this._storageKeyName = 'note';
  }

  /*新增记事本*/
  add(item,counts){
    var noteData = this.getNoteLocal();
    var isHasInfo = this._isHasThatOne(item.id,noteData);
    if(!isHasInfo){
      noteData.push(item);  
    }else{
      //更新操作
    }
    wx.setStorageSync(this._storageKeyName, noteData)
  }

  getNoteLocal(){
    var res = wx.getStorageInfoSync(this._storageKeyName);
    if (!res) {
      res = [];
    }
    return res;
  }

  _isHasThatOne(id,arr){
    var item,result = { index: -1};
    for (let i = 0; i < arr.length; i++){
      item = arr[i];
      if(item.id == id){
        result = {
          index:i,
          data:item
        };
        break;
      }
    }
    return result;
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