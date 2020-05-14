import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './dialog.scss';

export default class Dialog extends Taro.Component {
  config = {
    navigationBarTitleText: ''
  };

  render() {
    return <View className="dialog">
                <View className="header">{this.props.renderHeader}</View>
                <View className="body">
                    {this.props.children}
                </View>
                <View className="footer">{this.props.renderFooter}</View>
            </View>;
  }
}