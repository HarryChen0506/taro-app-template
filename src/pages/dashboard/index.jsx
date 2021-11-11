/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Taro, { getCurrentInstance, useReady, useDidShow, useDidHide, usePullDownRefresh } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { add, minus, asyncAdd } from '@/store/actions/counter'
// import { user as userHttpService } from '@/services/http'
// import { loginByWx, wxBindPhone } from '@/services/system'
// import { cloneDeep } from 'voxelcloud-ui'
// import session from '@/services/session'
import './index.less'

/**
 * 接口会调不通报错，因为appId不是这个项目。代码仅供参考。
 * 
 */

const Dashboard = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  // 获取路由参数
  const router = getCurrentInstance().router
  const { id } = router.params || {}

  // 可以使用所有的 React Hooks
  useEffect(() => { })

  // 对应 onReady
  useReady(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Taro 文档】-> 【进阶指南】->【Hooks】
  usePullDownRefresh(() => { })

  return (
    <View className='page-dashboard'>
      <View style='padding: 20px; overflow: scroll'>counter: {counter?.num}</View>
      <AtButton className='btn' type='primary' onClick={() => dispatch(minus())}>-</AtButton>
      <AtButton className='btn' type='primary' onClick={() => dispatch(add())}>+</AtButton>
      <AtButton className='btn' type='primary' onClick={() => dispatch(asyncAdd())}>async +</AtButton>
      {/* <AtButton className='btn' type='primary' onClick={fetchUserInfo} >测试请求 - 获取用户</AtButton>
      <AtButton className='btn' type='primary' onClick={handleGetCode}>微信获取code</AtButton>
      <AtButton className='btn' type='primary' openType='getUserInfo' onGetUserInfo={handleGetUserInfo}>微信获取用户信息</AtButton>
      <AtButton className='btn' type='primary' onClick={handleSystemLogin}>微信code登录APP</AtButton>
      <AtButton className='btn' type='primary' openType='getPhoneNumber' onGetPhoneNumber={handleBindPhone}>APP绑定微信手机号</AtButton>  */}
    </View>
  )
}


export default Dashboard

