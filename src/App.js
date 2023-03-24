import {Routes, Route} from 'react-router-dom'
import Home from './page/home'
import Home2 from './page/home2'
import Galeri from './page/galeri';
import Tim from './page/tim';
import Kontak from './page/kontak';
import Tentang from './page/tentang';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';
import Page4 from './page/page4';
import Page5 from './page/page5';
import Page6 from './page/page6';
import Page7 from './page/page7';
import Page8 from './page/page8';
import Page9 from './page/page9';
import Page10 from './page/page10';
import Page11 from './page/page11';
import Page12 from './page/page12';
import Admin from './page/admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/2' element={<Home2/>}/>
      <Route path='/galeri' element={<Galeri/>}/>
      <Route path='/tim' element={<Tim/>}/>
      <Route path='/kontak' element={<Kontak/>}/>
      <Route path='/tentang' element={<Tentang/>}/>
      <Route path='/page/1' element={<Page1/>}/>
      <Route path='/page/2' element={<Page2/>}/>
      <Route path='/page/3' element={<Page3/>}/>
      <Route path='/page/4' element={<Page4/>}/>
      <Route path='/page/5' element={<Page5/>}/>
      <Route path='/page/6' element={<Page6/>}/>
      <Route path='/page/7' element={<Page7/>}/>
      <Route path='/page/8' element={<Page8/>}/>
      <Route path='/page/9' element={<Page9/>}/>
      <Route path='/page/10' element={<Page10/>}/>
      <Route path='/page/11' element={<Page11/>}/>
      <Route path='/page/12' element={<Page12/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  );
}

export default App;
