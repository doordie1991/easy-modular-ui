import message from './global/message'
import _loading from './global/loading'
import setTabName from './global/setTabName'
import fontSize from './global/fontSize'
import userInfo from './global/userInfo'

import visible from './components/visible'
import formSave from './components/form-save'
import list from './components/list'
import page from './components/page'
import select from './components/select'

export default {
  global(Vue) {
    // 消息提示
    Vue.mixin(message)
    // 设置loading
    Vue.mixin(_loading)
    //设置标签导航名称
    Vue.mixin(setTabName)
    //字体大小
    Vue.mixin(fontSize)
    //用户信息
    Vue.mixin(userInfo)
  },
  components: {
    visible,
    formSave,
    list,
    page,
    select
  }
}
