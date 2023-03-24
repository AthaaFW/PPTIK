import { Link } from "react-router-dom";

const Card = ({judul, tgl, ktg, img, link}) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-xl bg-white border-2 border-gray-200">
      <div className="w-[380px] h-[190px] overflow-hidden">
      <img class="w-[380px] h-[190px] card-img overflow-hidden max-h-[190px]" src={img} alt="Sunset in the mountains" />
      </div>
      <div class="px-6 py-4 z-[5]">
        <div class="font-semibold text-main text-xl mb-2"><Link to={link}>{judul}</Link></div>
        <p class="text-gray-700 text-base">
          {tgl}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {ktg}
        </span>
      </div>
    </div>
  );
};

export default Card;
