import './App.css';
import 'antd/dist/antd.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, withRouter, BrowserRouter, Redirect, Link } from 'react-router-dom';
import HeaderContainer from './Components/Header/HeaderContainer';
import { Login } from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import { lazy } from 'react';
import { Switch } from 'react-router';
import store, { AppStateType } from './Redux/redux-store';
import { UsersPage } from './Components/Users/UsersContainer';
import { Button } from 'antd/lib/radio';

import { Layout, Menu, Breadcrumb, Avatar, Row, Col, Divider } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Header } from './Components/Header/Header';
//import { ChatPage } from './pages/chat';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'))
const PropfilePage = lazy(() => import('./Components/Profile/ProfileContainer'))
const ChatPage = lazy(() => import('./pages/Chat/ChatPage'))


const SuspensedDialogs = withSuspense(DialogsContainer)
const SuspensedProfile = withSuspense(PropfilePage)
const SuspensedChatPage = withSuspense(ChatPage)

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {
  catchALLUnandeledError = (e: PromiseRejectionEvent) => {
    alert("Some error occured")
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchALLUnandeledError)
  }

  componentWillMount() {
    window.removeEventListener('unhandledrejection', this.catchALLUnandeledError)
  }

  render() {
    return (
      // \\ !this.props.initialized ? <Preloader /> : (<div className='app-wrapper' >
      //     <HeaderContainer />
      //     <Navbar />
      //     <div className="app-wrapper-content" >

      //       <Switch>
      //         <Route exact path='/'
      //           render={() => <Redirect to={'/profile'} />} />
      //         <Route path='/profile/:userId?' render={() => <SuspensedProfile/>} />
      //         <Route path='/dialogs' render={() => <SuspensedDialogs/>} />
      //         <Route path='/users' render={() => <UsersPage pageTitle={"Самураи"} />} />
      //         <Route path='/login' render={() => <Login />} />
      //       </Switch>
      //     </div>

      //   </div>);


      <Layout>
        <Header />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="My Progile">
                <Menu.Item key="1"><Link to='/profile'>Profile</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/dialogs'>Messages</Link></Menu.Item>

              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                <Menu.Item key="5"><Link to='/developers'>Developers</Link></Menu.Item>

              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Chat">
                <Menu.Item key="9"><Link to='/chat'>Chat</Link></Menu.Item>

              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path='/'
                  render={() => <Redirect to={'/profile'} />} />
                <Route path='/profile/:userId?' render={() => <SuspensedProfile />} />
                <Route path='/dialogs' render={() => <SuspensedDialogs />} />
                <Route path='/developers' render={() => <UsersPage pageTitle={"Самураи"} />} />
                <Route path='/login' render={() => <Login />} />
                <Route path='/chat' render={() => <SuspensedChatPage />} />
                <Route path='*' render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )

  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

const AppContainer = compose<ComponentType>(
  withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp: React.FC = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp
