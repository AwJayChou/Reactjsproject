import React,{Component} from 'react'
import {Text,TextInput,Button,View,Image,StyleSheet,ActivityIndicator} from 'react-native'
const mystyle=StyleSheet.create({
    myImage:{
        width:80,
        height:80,
        alignSelf:'center',
        borderRadius:40
    }
});
export default class LoginComponent extends Component{
    static navigationOptions = {
        title: '登录',//设置标题内容
        titleStyle: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
        constructor(){
        super();
        this.state={
            uname:'',
            upwd:'',
            isloading:'false'
        }
    }
    handlepress=()=>{
      //获取用户名和密码
     //console.log(this.state)
        //设置状态允许加载的图标
        this.setState({isloading:true});
       var uname=this.state.uname;
       var upwd=this.state.upwd;
        console.log(this.state);
        //和服务器端通信
        fetch('http://10.3.154.31/admin/data' +
            '/02_login.php?uname='+uname+'&upwd='+upwd)
            .then((response)=>{
                return response.json()
            })
            .then((result)=>{
                if(result.code==1){
                    this.props.navigation.navigate('main')
                }else{
                    alert('用户名或密码错误')
                }
            })
    };
    handleChangeName=(msg)=>{
        this.setState({uname:msg})
    }
    handleChangePwd=(msg)=>{
        this.setState({upwd:msg})
    }
    render(){
        return <View>
            <Image source={require('../../img/1.jpg')}
             style={mystyle.myImage}
            ></Image>
            <TextInput
               placeholder='请输入用户名'
               onChangeText={this.handleChangeName}
            ></TextInput>
            <TextInput
                placeholder='请输入密码'
                onChangeText={this.handleChangePwd}
                secureTextEntry={true}
            ></TextInput>
            <Button title='登录'
            onPress={this.handlepress}
            ></Button>
            {this.state.isLoading&&<ActivityIndicator></ActivityIndicator>}

        </View>
    }
}