import React from 'react';

import '../css/movie.css'

import { Rate } from 'antd';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    //跳转电影详情页
    goDetail=()=>{
        // console.log('ok');
        console.log(this.props);//item 
        this.props.history.push(`/movie/detail/${this.props.id}`)
        
    }

    render(){
        return <div className="movieItem_box" onClick={this.goDetail}>
                 
                        <img src={this.props.images.small} alt={this.props.alt}/>
                        <h1><strong>电影名称</strong>：{this.props.title } </h1>
                            {/* {console.log(this.props)} */}
                        <h1><strong>上映年份：</strong>{this.props.year}年</h1>   
                        <h1><strong>电影类型：</strong>{this.props.genres.join(',')}</h1>
                        <Rate allowHalf defaultValue={this.props.rating.average/2}autoFocus></Rate>
                  
            </div>
    }
}