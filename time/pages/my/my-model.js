import {Base} from '../../utils/base.js';

class My extends Base {
  constructor(){
    super();
  }

  getUserInfo(cb){
    var that = this;
    wx.login({
      success:function(){
        wx.getUserInfo({
          success:function(res){
            typeof cb == "function" && cb(res.userInfo);
          },
          fail:function(res){
            typeof cb == "function" && cb({

            });
          }  
        });
      }
    })
  }

}

export {My};