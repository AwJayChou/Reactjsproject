import React,{Component} from 'react';
import {Text,FlatList,Image,View,TouchableOpacity} from 'react-native';

export default class ProductListComponent extends Component{
    constructor(){
        super();
        this.state = {
            list:[],
            pno:1
        };
    }

    componentWillMount(){
        //向服务器端发起请求
        fetch('http://10.3.154.31/admin/data/04_product_list.php')
            .then((response)=>{return response.json()})
            .then((result)=>{
                //console.log(result);
                var myList = result.data;
                //为了保证对象数组中每个对象都一个key，遍历myList
                for(var i=0;i<myList.length;i++){
                    myList[i].key=i
                }

                //将myList保存在状态中
                this.setState({list:myList});
            });
    }


    handlePress=(index)=>{
        //弹窗显示商品售卖数量
        //var soldCount =
            //this.state.list[index].price;
        //alert("该商品价格:"+soldCount);
        var lid=this.state.list[index].lid;
        this.props.navigation.navigate('detail',{id:lid})
    };

    showListItem=(info)=>{
       // console.log(this.state.list)
        //console.log(info.item.title)
        var imgPath = 'http://10.3.154.31/admin/'+info.item.sm;
        return <TouchableOpacity
            onPress={()=>this.handlePress(info.index)}
            style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:40,height:40,borderRadius:20}} source={{uri:imgPath}}></Image>
            <Text>{info.item.spec}</Text>
        </TouchableOpacity>
    };
    handle=()=>{
        var nowpage=this.state.pno;
        nowpage++;
        if(nowpage>5){
            return;
        }
        this.setState({pno:nowpage},function(){
            fetch('http://10.3.154.31/admin/data/04_product_list.php?pno='+this.state.pno)
                .then((response)=>{
                    return  response.json()
                }).then((result)=>{
                // console.log(result)
                var nowlist=this.state.list
                console.log(result.data)
                var b=result.data
                var  c=nowlist.concat(b)
                console.log(c)
                this.setState({list:c})
            })
        })

    }

    render(){
        return <FlatList
            renderItem={this.showListItem}
            data={this.state.list}
           onEndReached={this.handle}
            onEndReachedThreshold={0.5}
        ></FlatList>
    }
}