const Btn = ({isi, aktif}) => {
    return ( 
        <button className={aktif?"bg-main text-white border-2 border-gray-200 rounded shadow-lg px-[12px] py-[4px]":"bg-white text-main border-2 border-gray-200 rounded shadow-lg px-[12px] py-[4px] hover:bg-main hover:text-white"}>{isi}</button>
     );
}
 
export default Btn;