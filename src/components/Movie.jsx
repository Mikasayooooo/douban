import React from 'react';
import { Route, Link ,Switch} from 'react-router-dom'
import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'

// 布局相关的组件
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;


export default class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render(){
        return  <Layout style={{height:"100%"}}>
        
        <Content style={{ padding: '0 50px' }}>
         
          <Layout style={{ padding: '24px 0', background: '#fff' }}>

              {/* 侧边栏 */}
            <Sider width={200}  style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                // 刷新页面需要匹配地址值  window.location.hash.split('/')[2]类似这样
                defaultSelectedKeys={window.location.hash.split('/')[2]}              
                style={{ height: '100%' }}
                >              
                  <Menu.Item key="in_theaters">
                      <Link to="/movie/in_theaters/1">正在上映</Link>
                  </Menu.Item>
                  <Menu.Item key="coming_soon">
                     <Link to="/movie/coming_soon/1">即将上映</Link>
                  </Menu.Item>
                  <Menu.Item key="top250">
                     <Link to="/movie/top250/1">Top250</Link>
                  </Menu.Item>                      
              </Menu>
            </Sider>

            {/* 电影内容 */}
            <Layout style={{paddingLeft:"2px",width:"100%"}} >
                <Content style={{ padding: '0 24px', minHeight: 280 }}>

                  <Switch>
                    {/* 使用Switch，如果前面的路由匹配上了，后面的就不会匹配了 */}
                    <Route path="/movie/detail/:id" component={MovieDetail}></Route>
                    <Route path="/movie/:type/:page" component={MovieList}></Route>
                  </Switch>
                    
                    
                </Content>
            </Layout>
          </Layout>
        </Content>
       
      </Layout>
        
          
       
    }
}