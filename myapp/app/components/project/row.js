import React,{Component} from 'react'
import {View} from 'react-native'
export default class Row extends Component{
    render(){
        return <View style={{flexDirection: 'row'}}>
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