import React,{Component} from 'react'
import {Text,View,Image,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Row from './row'
import Col from './col'
export default class MainComponent extends Component{
     jump=(desPath)=>{
         this.props.navigation.navigate(desPath)
     }
    render(){
        return <ScrollView style={{backgroundColor:'powderblue'}}>
            {/*第一行*/}
            <Row>
                {/*第一列*/}
                <Col>
                    <Text style={{color:'red'}}>200</Text>
                    <Text>当日PC端PV量</Text>
                </Col>
                {/*第二列*/}
                <Col>
                    <Text style={{color:'green'}}>230</Text>
                    <Text>移动端PV量</Text>
                </Col>
            </Row>
            {/*第二行*/}
            <Row>
                {/*第一列*/}
                <Col>
                    <Text style={{color:'red'}}>1020</Text>
                    <Text>已完成订单总数</Text>
                </Col>
                {/*第二列*/}
                <Col>
                    <Text style={{color:'green'}}>2390</Text>
                    <Text>当日App下载量</Text>
                </Col>
            </Row>
            {/*第三行*/}
            <Row>
                {/*第一列*/}

                    <TouchableOpacity style={mystyle.sec}>
                        <Image source={require('../../img/order.png')}
                               style={{width:80,height:80}}
                        ></Image>
                        <Text>订单管理</Text>
                    </TouchableOpacity>




                    <TouchableOpacity style={mystyle.sec}>
                        <Image source={require('../../img/user.png')}
                               style={{width:80,height:80}}
                        ></Image>
                        <Text>用户管理</Text>
                    </TouchableOpacity>

            </Row>

                <Row>
                    {/*第一列*/}

                        <TouchableOpacity style={mystyle.sec}
                                          onPress={()=>this.jump('productlist')}>
                            <Image source={require('../../img/product.png')}
                            style={{width:80,height:80}}
                            ></Image>
                            <Text>商品管理</Text>
                        </TouchableOpacity>




                        <TouchableOpacity style={mystyle.sec}>
                            <Image source={require('../../img/setting.png')}
                                   style={{width:80,height:80}}
                            ></Image>
                            <Text>设置</Text>
                        </TouchableOpacity>

                </Row>



        </ScrollView>
    }
}
const mystyle=StyleSheet.create({
        mycol:{
            flex:1,
            height:100,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 2,
            borderRightWidth:2,
            borderColor:'#e6e6e6'
        },
       sec:{
            flex:1,
           alignItems: 'center',
           justifyContent: 'center',

       },
       center:{
           justifyContent: 'center'
       }
})