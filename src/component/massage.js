const Surat = ({namaDep, namaBel, noHp, tujuan, pesan}) => {
    return ( 
        <div className="flex flex-col p-[20px] w-[45%] gap-[20px] rounded-lg shadow-lg border-2 border-gray-200">
            <div className="flex flex-row items-center space-x-[5px]">
                <h1>Dari:</h1>
                <h1>{namaDep} {namaBel}</h1>
            </div>
            <div className="flex flex-row items-center space-x-[5px]">
                <h1>No Hp:</h1>
                <h1>{noHp}</h1>
            </div>
            <div className="flex flex-row items-center space-x-[5px]">
                <h1>Tujuan:</h1>
                <h1>{tujuan}</h1>
            </div>
            <div className="flex flex-row items-start space-x-[5px]">
                <h1>Pesan:</h1>
                <h1>{pesan}</h1>
            </div>
        </div>
     );
}
 
export default Surat;