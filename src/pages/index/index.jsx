import { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '@/store/actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
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
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  pageToSearch = () => {
    Taro.navigateTo({
      url: '/pages/dashboard/index',
    });
  };

  render() {
    return (
      <View className='index'>
        <View><Text>counter: {this.props.counter.num}</Text></View>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <Button className='dec_btn' onClick={this.pageToSearch}>hook 写法</Button>
      </View>
    )
  }
}

export default Index

