import {
  IoIosArrowDroprightCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

const HomeHero = () => {
  return (
    <header className="container-c m-auto md:flex justify-between items-center gap-8 py-16 md:py-20">
      <div className="md:w-1/2">
        <h1 className="text-5xl Grotesque font-bold">
          Healthy in side <span className="text-primary-light">fresh</span> out
          side
        </h1>
        <p className="opacity-50 pt-5">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-5">
          <button className="btn-primary">
            <span>Get started</span>
            <IoIosArrowDroprightCircle />
          </button>
          <button className="btn-secondary">
            <IoMdArrowDroprightCircle />
            <span>Learn more</span>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-end">
        <img src="./images/bg-banner.png" />
        <div className="absolute pr-3 top-5 md:top-0 left-5 flex items-center justify-between rounded-xl bg-white z-10">
          <img src="./images/kick-icon.png" />
          <div>
            <h4 className="font-bold">150+</h4>
            <p className="opacity-50">Member</p>
          </div>
        </div>
        <div className="absolute sm:p-3 md:p-14 bottom-10 lg:-right-16 flex items-center justify-center flex-col rounded-xl bg-white shadow-lg shadow-deep z-10">
          <img src="./images/image-icon.png" />
          <div className="text-center">
            <h4 className="font-bold pt-2.5">Zaqky Simorang</h4>
            <p className="opacity-50 pt-2">Member</p>
          </div>
        </div>
      </div>
      <div className=" bg-purple-400 w-[884px] h-[884px] inner -top-1/3 left-1/3 opacity-60 blur-[282px] hidden lg:block"></div>
      <div className=" bg-orange-300 w-[884px] h-[884px] inner -top-1/3 -left-1/3 opacity-60 blur-[282px] hidden lg:block"></div>
    </header>
  );
};

export default HomeHero;
