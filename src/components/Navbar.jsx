import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import CartWidget from './CartWidget'
import '../styles.css'

const Navbar = () => {

    const items = [
        {
          label: 'Accion',
          key: 'accion',
          icon: <MailOutlined />,
        },
        {
          label: 'Survival',
          key: 'survival',
          icon: <MailOutlined />,
        }
      ]

    return (
        <div className='navbar'>
            <span>Alvaro Store</span>
            <Menu mode="horizontal" items={items}/>
            <CartWidget />
        </div>
    )
}

export default Navbar