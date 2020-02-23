import React from 'react';

import { Spin, Alert,Pagination  } from 'antd';

// import axios from 'axios'

import fetchJSONP from 'fetch-jsonp'
// import '../css/movie.scss'

import MovieItem from './movieItem.jsx'

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // routerParams:this.props.match.params
            movies:[],  //电影列表
            nowPage:parseInt(props.match.params.page) || 1,  //当前展示第几页数据
            pageSize:10,     // 每页有几条数据
            total:0,        //总共几条数据
            isLoading:true,    //是否加载中
            movieType:props.match.params.type  //当前要获取的电影类型
        }
    }

    componentWillMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading:false
        //     })
        // },2000)
        this.loadMovieListByTypeAndId()
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        //接受的参数发生变化是改变

        this.setState({
            isLoading:true,
            nowPage:parseInt(nextProps.match.params.page) || 1,
            movieType:nextProps.match.params.type
        },function(){
            this.loadMovieListByTypeAndId()
        })
        
    }

//箭头函数不绑定this
    loadMovieListByTypeAndId = ()=>{

        const start = this.state.pageSize*(this.state.nowPage - 1)
        
        // const url = `https://douban.uieee.com/v2/movie/
        // ${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

        let url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

        fetchJSONP(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                movies:data.subjects,
                total:data.total,
                isLoading:false
            })
        }
        )
        // axios.get(url)
        // .then(data => {
        //     console.log(data)
        // }
        // )
    }

    renderList =()=>{
        if(this.state.isLoading){
            return <Spin tip="正在玩命加载ing..."  size="large">
                        <Alert
                        message="LOADING"
                        description="精彩内容，马上呈现！！！"
                        type="info"
                        />
                    </Spin>
        } else {
            return <div>
                <div style={{display:'flex',flexWrap:'wrap'}}>
               
               {this.state.movies.map(item=>{
                   //item覆盖了原来的props，history需要重新传过去
                   return  <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
               })}
           
                </div>
                <Pagination showQuickJumper defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize} onChange={this.onChange} hideOnSinglePage={true}/>
            </div>
             
        }
    }

    onChange= (page)=>{
        //操作了BOM对象，不推荐
        // window.location.href = `/#/movie/${this.state.movieType}/${page}`

        //编程式导航
        this.props.history.push(`/movie/${this.state.movieType}/${page}`)
        console.log(this.props);
        console.log(page);
        
        
    }

    render(){
        return <div>

            {this.renderList()}  

{/* 
            <h1>MovieList----{this.props.match.params.type}----{this.props.match.params.id}
                
            </h1> */}
        </div>
    }


}