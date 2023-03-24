

const Profile = ({img, nama, job}) => {
  return (
    <div className="flex items-center w-[20%] justify-center">
      <div class="w-full">
        <div class="bg-white shadow-xl rounded-lg py-3 border-2 border-gray-200">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto object-cover"
              src={img}
              alt="John Doe"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-lg text-gray-900 font-medium leading-8 whitespace-pre-line">
            {nama}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>{job}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
