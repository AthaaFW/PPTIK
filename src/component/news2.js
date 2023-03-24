import Card from "./card";
import img4 from '../asset/news2.jpeg'
import img5 from '../asset/news3.jpeg'
import img6 from '../asset/news4.jpeg'
import img7 from '../asset/news5.jpeg'
import img8 from '../asset/carousel1.jpeg'
import img9 from '../asset/carousel2.jpeg'


const News = () => {
    return ( 
        <div className="w-full flex flex-row flex-wrap justify-center gap-10 pb-[30px]">
            
            <Card judul="Rapat dengan Dinhub Jabar" tgl="29 FEB 2023" ktg="#Kegiatan" img={img7} link='/page/7'/>
            <Card judul="Kolaborasi PPTIK & Pustekhan" tgl="28 FEB 2023" ktg="#Kegiatan" img={img8} link='/page/8'/>
            <Card judul="Diskusi Dengan Kemenkoinfo" tgl="09 FEB 2023" ktg="#Mitra" img={img9} link='/page/9'/>

            <Card judul="Pertemuan PPTK ITB dan UBL" tgl="04 MARET 2023" ktg="#Kegiatan"  img={img4} link='/page/10'/>
            <Card judul="Kerjasama PPTIK dengan BRIN" tgl="02 MARET 2023" ktg="#Mitra"  img={img5} link='/page/11'/>
            <Card judul="Kunjungan ke SMKS Cendekia" tgl="01 MARET 2023" ktg="#Kegiatan"  img={img6} link='/page/12'/>
        </div>
     );
}
 
export default News;