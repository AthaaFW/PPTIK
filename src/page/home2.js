import Navbar from "../component/nav";
import Drop from "../component/dropdown"
import { useState } from "react";
import Footer from '../component/footer'
import Btn from '../component/btn'
import { Link } from "react-router-dom";
import News from "../component/news2";

const Home = () => {

    const[drop, setDrop] = useState(false)
    const onDrop = () =>{
        setDrop(!drop)
    }

    return ( 
        <div className="flex flex-col items-center space-y-[30px] pt-[100px] overflow-x-hidden" id="home">
            <Navbar drop={onDrop} home={true}/>
            <Drop open={drop}/>
            <News/>
            <div className="flex flex-row space-x-[5px] max-w-max">
                <a href="/"><Btn isi="<< Prev"/></a>
                <a href="/"><Btn isi="1"/></a>
                <Btn isi="2" aktif={true}/>
            </div>
            <Footer/>   
        </div>
     );
}
 
export default Home;