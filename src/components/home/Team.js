import img3 from "../../assets/home/img3.png";

const Team = () => {
  return (
    <div className="mb-80 mt-64">

      <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-center mb-24 text-white">Notre équipe</h3>

      <div className="flex flex-wrap sm:gap-14 gap-9 md:gap-20 justify-center">

        <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-card-shadow">
          <div className="bg-custom-gradient flex justify-center items-center h-40">
            <img src={img3} alt="person" className="w-36" />
          </div>
          <div className="bg-third-100 flex justify-center items-center h-24">
            <span className="text-center font-semibold text-xl">name</span>
          </div>
        </div>

        <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-card-shadow">
          <div className="bg-custom-gradient flex justify-center items-center h-40">
            <img src={img3} alt="person" className="w-36" />
          </div>
          <div className="bg-third-100 flex justify-center items-center h-24">
            <span className="text-center">name</span>
          </div>
        </div>

        <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-card-shadow">
          <div className="bg-custom-gradient flex justify-center items-center h-40">
            <img src={img3} alt="person" className="w-36" />
          </div>
          <div className="bg-third-100 flex justify-center items-center h-24">
            <span className="text-center">name</span>
          </div>
        </div>

        <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-card-shadow">
          <div className="bg-custom-gradient flex justify-center items-center h-40">
            <img src={img3} alt="person" className="w-36" />
          </div>
          <div className="bg-third-100 flex justify-center items-center h-24">
            <span className="text-center">name</span>
          </div>
        </div>

        <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-card-shadow">
          <div className="bg-custom-gradient flex justify-center items-center h-40">
            <img src={img3} alt="person" className="w-36" />
          </div>
          <div className="bg-third-100 flex justify-center items-center h-24">
            <span className="text-center">name</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
