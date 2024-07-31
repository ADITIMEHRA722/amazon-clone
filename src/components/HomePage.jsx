import React from 'react'
import {Carousel , HomePageCard, CarouselCategory, CarouselProduct} from './';
const HomePage = () => {
  return (
    <div className="bg-amazonclone-background" >
   
      <div className="min-w-[1000px] max-w-[1500px] bg-grey-500 m-auto">
      
      <Carousel/>
      <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
      {/* <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div> */}
      <HomePageCard title={"We have a surprise for you "}
        img={"../images/home_grid_1.jpg"} alt=""
        link={"See terms and conditions"}
      />

<HomePageCard title={"Watch the rings of power "}
        img={"../images/home_grid_2.jpg"} alt=""
        link={"Start steaming now"}
      />

<HomePageCard title={" Watch the unlimited Steaming "}
        img={"../images/home_grid_3.jpg"} alt=""
        link={"find out more"}
      />

<HomePageCard title={"More title to explore "}
        img={"../images/home_grid_4.jpg"} alt=""
        link={"Browse kindle unlimited"}
      />

<HomePageCard title={"Shope pet supplies"}
        img={"../images/home_grid_5.jpg"} alt=""
        link={"See more"}
      />


<HomePageCard title={"Spring sale "}
        img={"../images/home_grid_6.jpg"} alt=""
        link={"See the deal"}
      />


<HomePageCard title={"Echo bud "}
        img={"../images/home_grid_7.jpg"}
        link={"See more"}
      />

<HomePageCard title={"Family plan: 3 months free "}
        img={"../images/home_grid_8.jpg"}
        link={"Learn more"}
      />
      

      <div className="m-3 pt-8">
      <img className="xl:hidden" src ={"../images/banner_image_2.jpg"}/>
      </div>
      </div>

     <CarouselProduct/>
      <CarouselCategory/>
      <div className="h-[200px] ">
        <img className="h-[100%] m-auto" src = "../images/banner_image.jpg" alt=""/>
      </div>
       </div>
    </div>
  )
}

export default HomePage
