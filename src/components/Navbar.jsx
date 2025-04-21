import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import '../styles.css'

const Navbar = () => {
  const items = [
    {
      label: <Link to="/category/accion">Accion</Link>,
      key: 'accion',
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/category/survival">Survival</Link>,
      key: 'survival',
      icon: <MailOutlined />,
    },
  ]

  return (
    <div className='navbar'>
      <Link to="/" className="brand">Alvaro Store</Link>
      <Menu mode="horizontal" items={items} />
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  )
}

export default Navbar