import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Button, Image, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';
import img9 from '../../assets/images/img10.jpg';
import img10 from '../../assets/images/img11.jpg';
import Dialog from '../../conponents/dialog/dialog';

export default class Index extends Taro.Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  };
  jump() {
    Taro.navigateTo({ url: '/pages/login/login' });
  }
  getData(a, b, e) {
    console.log(a);
    console.log(b);
    console.log(e);
  }

  render() {
    return <View className="index">
        <Text>我是首页</Text>
        <Button onClick={this.jump} className="button">登录</Button>
          <View className="my-box">111111111</View>
        <Swiper indicatorColor="#999" indicatorActiveColor="#333" circular indicatorDots autoplay className="swiper-box">
          {[img7, img8, img9, img10].map(img => <SwiperItem key={img}><Image mode="aspectFit" src={img} className="swiper-img" /></SwiperItem>)}
        </Swiper>
          <Dialog renderHeader={<View className="head">这是添加的头部</View>} renderFooter={<View>这是添加的底部</View>}>

              <View>这是父组件插入的内容</View>
          </Dialog>
          <Button className="get-btn" onClick={this.getData.bind(this, 'aa', 'bb')}>我要取数据</Button>
      </View>;
  }
}