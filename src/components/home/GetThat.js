import {BsArrowRightShort} from "react-icons/bs"
const GetThat = () => {
  return (
    <div className="container-c py-24">
      <div className="bg-gradient-to-r from-[#6462F0] to-[#9190E9] p-10 md:p-20 rounded-2xl flex flex-wrap items-center justify-center lg:justify-between gap-5">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          <img src="./images/icon-1.png" alt="icon" />
          <div>
            <h4 className="text-white">Get that 11 line in 30 days</h4>
            <a
              className="text-white opacity-50 flex items-center gap-4 md:gap-10"
              href="#"
            >
              Learn more <BsArrowRightShort />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          <img src="./images/icon-2.png" alt="icon" />
          <div>
            <h4 className="text-white">14 Days sherd challenge</h4>
            <a
              className="text-white opacity-50 flex items-center gap-4 md:gap-10"
              href="#"
            >
              Learn more <BsArrowRightShort />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          <img src="./images/icon-3.png" alt="icon" />
          <div>
            <h4 className="text-white">Get that 11 line in 30 days</h4>
            <a
              className="text-white opacity-50 flex items-center gap-4 md:gap-10"
              href="#"
            >
              Learn more <BsArrowRightShort />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetThat