import { callWapDirection} from '../../services/classify_api.js';

// 获取全局应用程序实例对象
const app = getApp();

//创建页面实例化对象
Page({
  data: {
    classifyList: []
  },

  onLoad () {//页面加载
    callWapDirection().then( (res) => {
      if(res.ocde = 200) {
        this.setData({
          classifyList: res.data
        })
      }
    })
  }
})


