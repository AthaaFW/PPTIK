import Logo from '../asset/logo-itb.png'
import {Spin as Ham} from 'hamburger-react'
import { Link } from 'react-router-dom';

const Navbar = ({drop, home, galeri, tim, kontak, tentang}) => {
    return ( 
        <div className="w-full p-2 px-5 bg-main text-white flex flex-row justify-between items-center fixed top-0 left-0 z-[90]">
            <div className='flex flex-row items-center space-x-2'>
                <img src={Logo} alt="" className='w-[40px]'/>
                <h1 className='text-xl font-semibold'>Pusat Penelitian Teknologi Informasi dan Komunikasi</h1>
            </div>
            <div className='flex flex-row items-center space-x-3'>
                <Link to='/'><h1 className={home?'text-whiteTrans hover:text-white nav-link active':'text-whiteTrans hover:text-white nav-link'}>Home</h1></Link>
                <Link to='/galeri'><h1 className={galeri?'text-whiteTrans hover:text-white nav-link active':'text-whiteTrans hover:text-white nav-link'}>Galeri</h1></Link>
                <Link to='/tim'><h1 className={tim?'text-whiteTrans hover:text-white nav-link active':'text-whiteTrans hover:text-white nav-link'}>Peneliti & Staff</h1></Link>
                <Link to='/tentang'><h1 className={tentang?'text-whiteTrans hover:text-white nav-link active':'text-whiteTrans hover:text-white nav-link'}>Tentang PPTIK</h1></Link>
                <Link to='/kontak'><h1 className={kontak?'text-whiteTrans hover:text-white nav-link active':'text-whiteTrans hover:text-white nav-link'}>Kontak</h1></Link>
                {/* <Ham size={20} onToggle={drop}/> */}
            </div>
                
        </div>
     );
}
 
export default Navbar;