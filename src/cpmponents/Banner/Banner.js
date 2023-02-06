
const Banner = () => {
  return (
    <section className="mt-20">
        <div className="container flex items-center justify-between relative">
            <div className="w-1/2">
                <h2 className="text-6xl font-Grotesque font-bold">Healthy in side <br/><span className="font-Grotesque font-bold text-920">fresh</span> out side</h2>
                <p className="w-97 py-5 color-930 opacity-50">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className="pb-14">
                    <a className="pimary-btn py-3 px-6"href="#">Get started <i class="ml-16 px-1 py-px rounded-full bg-white fa-solid text-910 fa-angle-right"></i></a>
                    <a className="secondary-btn ml-9 py-3 px-6"href="#"><i class="fa-solid fa-circle-play mr-3"></i>Learn more</a>
                </div>
                <h4>Brands:</h4>
                <img src="images/banner-logo.png" alt="banner"/>
            </div>
            <div className="w-98">
                <img src="images/bannner.png" alt="banner icon"/>
            </div>
            <div className="bg-940 inner top-484px opacity-60 left-130px"></div>
            <div className="bg-inner2 inner top-81px opacity-20 left-40%"></div>
        </div>
        
    </section>
  )
}

export default Banner