import './index.scss';
import Sidebar from '../Sidebar';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>hhhhhhhhhhhhhhhhhhhhh</span>
            {/* <Outlet/> */}
            <span>/body</span>
        </div>
    </div>
    )
}

export default Layout