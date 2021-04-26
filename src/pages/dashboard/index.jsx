import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import { add, minus, asyncAdd } from '@/store/actions/counter'
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

  render() {
    return (
      <View className='page-dashboard'>
        <View style='padding: 20px; overflow: scroll'>{JSON.stringify(this.props.user)}</View>
        <View style='padding: 20px; overflow: scroll'>hello world</View>
      </View>
    )
  }
}

export default Dashboard

