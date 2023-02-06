
const Workout = () => {
  return (
    <div className="workout mt-28">
        <div className="container flex justify-between items-center">
            <div className="w-1/2">
            <img src="images/workout.png" alt="workout"/>
            </div>
            <div className="w-1/2 pl-28">
                <h3 className="sub-heading">Best full body workout to lose fat</h3>
                <p className="color-930 opacity-50 pt-8 mb-12">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <a className="pimary-btn py-3 px-6" href="#">Get started <i class="ml-16 text-white fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Workout