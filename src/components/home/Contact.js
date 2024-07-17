import logo from "../assets/home/logo.png";
import call from "../assets/home/call.png";
import mail from "../assets/home/mail.png";
import maintain from "../assets/home/maintain.png";
import services from "../assets/home/services.png";

const Contact = () => {
  return (
    <div className=" bg-sisth-100 pt-16 pb-12 ">
      <div className="grid md:grid-cols-3  gap-10 justify-center md:justify-start text-fourth-100  md:border-b-4 border-fourth-100 md:pb-24 ">
        <div className="flex justify-center md:block">
          <img src={logo} alt="logo" className="w-24 max-h-24" />
        </div>
        <div className="flex flex-col gap-4 md:pr-10 lg:pr-20 xl:pr-28 font-bold   text-center">
          <h3 className="leading-6 text-xl sm:text-2xl sm:leading-7 lg:leading-9 text-center">
            About us
          </h3>

          <div className="flex justify-center gap-3">
            <div>
              <img src={services} alt="services" />
            </div>

            <span className="text-sm leading-5 sm:text-base sm:leading-6 lg:leading-8 lg:text-lg">
              Site web
            </span>
          </div>
          <div className="flex justify-center gap-3">
            <div>
              {" "}
              <img src={maintain} alt="maintain" />
            </div>

            <span className="text-sm leading-5 sm:text-base sm:leading-6 lg:leading-8 lg:text-lg">
              Notre équipe
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <h3 className="leading-6 text-xl font-bold sm:text-2xl lg:leading-9 sm:leading-7 ">
            Contact us
          </h3>

          <div className="flex justify-center gap-3">
            <div>
              <img src={mail} alt="mail" />
            </div>
            <a
              href="IGL_team@gmail.com"
              className=" font-semibold text-sm leading-5 sm:text-base sm:leading-6 lg:leading-8 lg:text-lg underline"
            >
              IGL_team@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-3">
            <div>
              <img src={call} alt="call" />
            </div>
            <span className="sm:text-base sm:leading-6 text-sm whitespace-nowrap font-semibold leading-5 lg:leading-8 lg:text-lg">
              +213 541 663 212
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
