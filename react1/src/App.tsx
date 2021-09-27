import './App.css';
import 'antd/dist/antd.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, withRouter, BrowserRouter, Redirect } from 'react-router-dom';
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

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'))
const PropfilePage = lazy(() => import('./Components/Profile/ProfileContainer'))


const SuspensedDialogs = withSuspense(DialogsContainer)
const SuspensedProfile = withSuspense(PropfilePage)

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
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
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
              Content
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
