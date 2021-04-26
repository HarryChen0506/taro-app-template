import { Component } from 'react'
import { connect } from 'react-redux'
// import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { add, minus, asyncAdd } from '@/store/actions/counter'
import { user as userHttpService } from '@/services/http'
import { cloneDeep } from '@/vc-util'
import session from '@/services/session'
import './index.less'

@connect(({ counter, user }) => ({
  counter,
  user
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Dashboard extends Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleQuery = () => {
    session.saveSession('hello')

    userHttpService.login({
      data: { name: '张三' },
    }).then(res => {
      console.log('handleQuery', res)
    }).catch(err => {
      console.error('err', err)
    })

    setTimeout(() => {
      const a = { name: '123' }
      const b = cloneDeep(a)
      a.name = 'world'
      console.log(a, b)
    }, 1000)
  }

  handleQueryUser = () => {
    userHttpService.currentUser({
      data: { name: '张三', age: 20 },
    }).then(res => {
      console.log('handleQueryUser', res)
    }).catch(err => {
      console.error('err', err)
    })
  }

  render() {
    return (
      <View className='page-dashboard'>
        <View style='padding: 20px; overflow: scroll'>{JSON.stringify(this.props.user)}</View>
        <View style='padding: 20px; overflow: scroll'>hello world</View>
        <AtButton className='btn' type='primary' onClick={this.props.dec}>-</AtButton>
        <AtButton className='btn' type='primary' onClick={this.handleQuery}>测试请求</AtButton>
        <AtButton className='btn' type='primary' onClick={this.handleQueryUser}>获取用户</AtButton>
      </View>
    )
  }
}

export default Dashboard

