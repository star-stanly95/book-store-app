import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MenuItem = ({ item }) => (
  <li className="has-children">
    {/* <a href={item.link}>{item.label}</a> */}
    <Link to={item.link}>{item.label}</Link>
    {item.submenu && <SubMenu items={item.submenu} />}
  </li>
);

const SubMenu = ({ items }) => (
  <ul >
    {items.map((subItem) => (
      <MenuItem key={subItem.id} item={subItem} />
    ))}
  </ul>
);

const Menu = ({ items }) => {
  const isLoggedIn = useSelector((state) => state.userlogin.isLoggedIn);

  return (
    <div>
      {isLoggedIn &&
        <nav className="navbar">
          <ul className='navbar-menu'>
            {items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      }
    </div>

  )
};
export default Menu;