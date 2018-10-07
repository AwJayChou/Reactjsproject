import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default class Col extends Component{
    render(){
        return <View style={[mystyle.mycol,mystyle.myborder]}>
            {
                React.Children.map(
                    this.props.children,function(child){
                        return child
                    }
                )
            }
        </View>
    }
}
const mystyle=StyleSheet.create({
    mycol:{
        flex:1,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    sec:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    center:{
        justifyContent: 'center'
    },
    myborder:{
        borderBottomWidth: 2,
        borderRightWidth:2,
        borderColor:'#e6e6e6'
    }
})