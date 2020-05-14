import taro,{Component} from '@tarojs/taro'
import {View} from "@tarojs/components";
import './login.scss'
// import React from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            date:new Date(),
            name:'hu'
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    componentDidShow() {
    }
    componentDidHide() {
    }

    config={
        navigationBarTextStyle:{color:"red",fontSize:16},
        navigationsBarTitleText:'登录'
    }
    render () {
        return (
            <View>111
                <View>{this.state.name}</View>
            </View>

        )
    }
}