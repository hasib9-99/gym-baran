import {BsArrowRight} from 'react-icons/bs'

const Workout = () => {
  return (
    <section className="container-c pb-24">
        <div className="container block lg:flex justify-between items-center gap-10 lg:gap-16 xl:gap-28">
            <div className="w-full lg:w-1/2">
              <img src="images/workout.png" alt="workout"/>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                <h3 className="sub-heading">Best full body workout to lose fat</h3>
                <p className="color-930 opacity-50 pt-8 mb-12">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <a className="w-1/2 sm:w-1/3 block btn-primary px-6" href="#">Get started <BsArrowRight /></a>
            </div>
        </div>
    </section>
  )
}

export default Workout