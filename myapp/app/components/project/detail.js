import React,{Component} from 'react'
import {Text,Image,View,Button,ScrollView} from 'react-native'
export default class  DetailComponent extends Component{
    constructor(){
        super()
        this.state={
            title:'',
            subtitle:'',
            imgList:[],
            picIndex:0,
            timer:null
        }
    }
    //在组建挂载完毕后 轮播图片
    componentDidMount(){
       var tmptimer=setInterval(()=>{
            var nowIndex=this.state.picIndex;
            console.log(nowIndex)
            nowIndex+=1;
           console.log(nowIndex)
            if(nowIndex>this.state.imgList.length){
                this.setState({picIndex:nowIndex})
                return
            }
            this.setState({picIndex:nowIndex})
        },3000)
        this.setState({timer:tmptimer})
    }
    //清理工作
    componentWillUnmount(){
        //定时器
        clearInterval(this.state.timer)
    }
    componentWillMount(){
        var id=this.props.navigation.state.params.id;
      //console.log(id);
        fetch('http://10.3.154.31/ajia_code/data/product/details.php?lid='+id)
            .then((response)=>{
                return response.json()
            }).then((result)=>{
             //console.log(result);
             //保存标题副标题
            var t1=result.details.title;
            var t2=result.details.subtitle;
            this.setState({title:t1,
            subtitle:t2,

            });
            console.log(this.state.title,this.state.subtitle)
            //暂时保存包含md图片的列表
            var tmpList=[];
            var arr=result.details.picList
            console.log(arr)
            for(var i=0;i<arr.length;i++){
                var obj=arr[i].md
                tmpList.push(obj)

            }
            console.log(tmpList)
            this.setState({imgList:tmpList})
        })
    }
    render(){
        return <View style={{flex:1}}>
        <ScrollView>
            <Image
                style={{height:200,width:250}}
                source={{uri:'http://10.3.154.31/admin/'
                        +this.state.imgList[this.state.picIndex]}}></Image>
            <Text style={{fontSize:10}}>{this.state.title}</Text>
            <Text style={{fontSize:10}}>{this.state.subtitle}</Text>
        </ScrollView>
            <Button title='编辑'
             color='#ff0000'
            ></Button>

        </View>
    }
}