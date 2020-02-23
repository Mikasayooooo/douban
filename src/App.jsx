import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import About from './components/About.jsx'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    // componentWillMount(){
    //     console.log(window.location.hash.split('/')[1]);
        
    // }

    render() {
        return <HashRouter>

            <Layout className="layout" style={{ height: '100%' }}>

                {/* 头部 */}
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                            </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                {/* 内容 */}
                <Content style={{ backgroundColor:"#fff" , flex:1}}>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/movie" component={Movie}></Route>
                    <Route path="/about" component={About}></Route>
                </Content>

                {/* 底部
                <Footer style={{ textAlign: 'center'}}>DouBanMovie ©2020 Created by LHL</Footer> */}
            </Layout>

        </HashRouter>
    }
}