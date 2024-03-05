
import Menu from './Menu/Menu'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainRoutes from './Routes/Routes'
import Login from './Login'


const menuData = [
    {
        id: 1,
        label: 'Home',
        link: '/home',
    },
    {
        id: 2,
        label: 'Book',
        submenu: [
            {
                id: 21,
                label: 'Create Book',
                link: '/CreateBook',
            },
            {
                id: 22,
                label: 'Book 2',
                submenu: [{
                    id: 23,
                    label: 'Book 2-1',
                    submenu: [{
                        id: 231,
                        label: 'Product 2-12',
                        link: '/Book',
                    }]
                }]
            },
            {
                id: 23,
                label: 'Product 3',
                link: '/products/product3',
            },
            {
                id: 24,
                label: 'Product 4',
                link: '/products/product4',
            },
        ],
    }
];

function App() {

    return (
        <div>
            <Router>
                <Menu items={menuData} />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Navigate to="/home" />} />
                </Routes>
                <div className="container-fluid mt-3" >
                    <MainRoutes />
                </div>
            </Router>
        </div>




    )
}

export default App;