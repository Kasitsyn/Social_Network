import { Row, Col, Menu, Avatar, Layout, Collapse } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { UserOutlined } from '@ant-design/icons';
import { selectCurrentUserLogin, selectIsAuth } from './../../Redux/auth-selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/auth-reducer';
import { Button } from 'antd/lib/radio';
type HeaderTypes = {}
export const Header: React.FC<HeaderTypes> = (props) => {
    const { Header } = Layout

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const dispatch = useDispatch()

    const logoutCallBack = () => {
        dispatch(logout())
    }

    return (<Header className="header">
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to='/developers'>Developers</Link></Menu.Item>
                </Menu>
            </Col>

            {isAuth
                ? <>
                    <Col span={1}>
                        <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Col>
                    <Col span={5}>
                        <Button onClick={logoutCallBack}>Log out</Button>
                    </Col>

                </>

                : <Col span={6}>
                    <Button>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Col>}

        </Row>
    </Header>
    )

}
