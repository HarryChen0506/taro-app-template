
import { useSelector } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'

const Index = () => {
  const counter = useSelector(state => state.counter)

  const pageToDashboard = () => {
    Taro.navigateTo({
      url: '/pages/dashboard/index'
    })
  }

  return (
    <View className='page-index'>
      <View><Text>Hello, World</Text></View>
      <View>counter: {counter?.num}</View>
      <Button onClick={pageToDashboard}>跳转dashboard</Button>
    </View>
  )
}

export default Index

