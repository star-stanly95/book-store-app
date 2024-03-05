import React, { useState } from 'react';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div onClick={handleToggle}>
        {item.name}
        {item.children && <span>{isOpen ? ' -' : ' +'}</span>}
      </div>
      {isOpen && item.children && (
        <ul>
          {item.children.map((childItem) => (
            <MenuItem key={childItem.id} item={childItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const App = () => {
  const navigationItems = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Products',
      children: [
        {
          id: 21,
          name: 'Laptops',
          children: [
            {
              id: 211,
              name: 'Gaming Laptops',
            },
            {
              id: 212,
              name: 'Business Laptops',
            },
          ],
        },
        {
          id: 22,
          name: 'Smartphones',
        },
      ],
    },
    {
      id: 3,
      name: 'Contact Us',
    },
  ];

  return (
    <div>
      <Navbar items={navigationItems} />
    </div>
  );
};

export default App;