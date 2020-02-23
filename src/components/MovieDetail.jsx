import React from 'react'

import { Button, Icon,Spin, Alert } from 'antd';

import fetchJSONP from 'fetch-jsonp'

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movieInfo:{},  
            isLoading:true  //是否加载中
        }
    }

    goBack= ()=>{
        console.log(this.props.history);
        this.props.history.go(-1)
        
        
    }

    //图片的域名问题通过replace替换

    componentWillMount(){
        // console.log(this.props);
        
        fetchJSONP(`https://douban.uieee.com/v2/movie/subject/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            this.setState({
                movieInfo:data,
                isLoading:false
            })
        })
    }

    renderMovieInfo = () =>{

        if(this.state.isLoading) {
            return <Spin tip="正在玩命加载ing..."  size="large">
                        <Alert
                        message="LOADING"
                        description="精彩内容，马上呈现！！！"
                        type="info"
                        />
                    </Spin>
        } else {
            return <div style={{textAlign:'center'}}>
                 <h1 style={{fontSize:'30px',color:'blue',fontWeight:'600'}}>{this.state.movieInfo.title}</h1>
                    <img src={this.state.movieInfo.images.large} alt="" /> 
                    <p style={{marginTop:'30px',fontSize:'20px'}}>{this.state.movieInfo.summary}</p>
            </div>
        }

        
    }

    render() {
        return <div>
             <Button type="primary" shape="round" onClick={this.goBack}>
                <Icon type="left" />
                    返回电影列表页面
                </Button>

                {this.renderMovieInfo()}
                {/* 提前调用，展示数据 */}
    {/* <p>{this.state.movieInfo.title  }</p>
    <p>{this.state.movieInfo.summary}</p>
    <img src={this.state.movieInfo.images.large} alt=""/> */}
        </div>
    }
}
