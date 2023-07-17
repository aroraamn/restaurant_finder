import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'

import pizza from "../../assets/pizza.png"
import garlic from "../../assets/garlic.png"
import juice from "../../assets/juice.png"
import burger from "../../assets/burger.png"
import coffee from "../../assets/coffee.png"
import toast from "../../assets/toast.png"
import pepper from "../../assets/pepper.png"
import fish from "../../assets/fish.png"
import sushi from "../../assets/sushi.png"
import bbq from "../../assets/bbq.png"
import hotdog from "../../assets/hotdog.png"
import {BsPlus} from 'react-icons/bs'
import {BsArrowRightShort} from "react-icons/bs"
import food1 from "../../assets/food1.png"
import {AiFillStar} from "react-icons/ai"
import {MdMonetizationOn} from "react-icons/md"
import {GiPathDistance} from "react-icons/gi"
import food2 from "../../assets/food2.jpg"
import food3 from "../../assets/food3.jpg"
import food4 from "../../assets/food4.webp"

const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] basis-80 p-8'>
      {/* top section */}
    <div className='flex items-center justify-between'>
    <div className='flex items-center border-b-2  pb-2 basis-1/2 gap-2'>
      <AiOutlineSearch className = 'text-hoverColor text-[20px] cursor-pointer'/>
    <input type="text" placeholder='Search your favourite'className='border-none outline-none placeholder:text-sm focus:outline-none' />
      </div>

      <div className='flex gap-4 items-center' >
        <AiOutlineAppstoreAdd className='text-hoverColor cursor-pointer text-[25px] hover:text-[20px] transition-all'/>
        <button className='bg-sideMenuBg cursor-pointer text-bodyBg font-semibold py px-4 rounded-[5px] hover:bg-[#55545e] transition-all'>Go Premium</button>
      </div>
    </div>
    

      {/* Title Div */}

      <div className='flex items-center justify-between mt-8'>
        <div className="title">
          <h1 className="text-[35px] text-titleColor tracking-[1px] font-black">
            Find the best place
          </h1>
          <span className='text-[16px] opacity-70'><strong>249 Restaurant,</strong> Choose yours</span>
        </div>
      

      <div className='flex items-center justify-between'>

        <div className='specials px-4 text-center border-r-2'>
          <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
          <small className='text-[16px] opacity-70'>Specials</small>
        </div>

        <div className='deliveries px-4 text-center'>
          <h3 className='text-[20px] font-bold text-titleColor'>90</h3>
          <small className='text-[16px] opacity-70'>Deliveries</small>
        </div>

        </div>
      </div>


      {/* Categories Div */}

      <div className='flex mt-8 items-center gap-10'>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={pizza} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Italian
          </span>

          
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#fbf0ef] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={garlic} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Asian
          </span>

          
        </div>


        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={juice} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Bars
          </span>

          
        </div>


        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={burger} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Burgers
          </span>
          
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#f6f5ef] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={coffee} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Cafee
          </span>
          
        </div>



        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#f9f5f3] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={toast} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Pubs
          </span>

          
        </div>


        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#eaeaf7] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={pepper} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Vegan
          </span>
          
        </div>

        
        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#fcf8ef] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={fish} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Sea
          </span>
          
        </div>


        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#f1fcf0] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={sushi} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            Sushi
          </span>
          
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#eeeaf7] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={bbq} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            BBQ
          </span>
          
        </div>


        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#e2fbfa] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={hotdog} alt='food Image' className='w-[70%] flex justify-center m-auto hover:scale-[1.5] transition-all cursor pointer'></img>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            HotDog
          </span>
          
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className='imgDiv h-[40px] w-[40px] bg-[#f1fcf0] rounded-full flex items-center justify-center m-auto p-1'>
            <BsPlus className='text-center flex justify-center m-auto text-[25px] hover:scale-[1.5] transition-all cursor pointer'/>
          </div>
          <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>
            More
          </span>
          
        </div>

  </div>


       {/* Restaurants Sections */}
       <div className='restaurant mt-8'>
        <div className='flex items-center justify-between'>

          <div className="title">
            <h1 className='text-[25px] text-titleColor font-bold'>New Restaurants</h1>
            <span className='text-[16px] opacity-70'><strong>9 restaurants, </strong> have been opened up in town</span>
          </div>

          <button className='cursor-pointer flex align-center gap-2 text-titleColor font-semibold py px-4 rounded-[5px] hover:bg-[#55545e] hover:text-bodyBg transition-all'>View All 
          <BsArrowRightShort className='text-[20px]'/>
          </button>

        </div>

        <div className='restaurantContainer py-8 flex justify-center items-center'>


        <div className='singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px] m-auto'>
          <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
            <img src= {food1} alt="" className='w-full h-full object-cover' />
          </div>
          <h1 className='restName block text-center font-bold opacity-90 pt-4'>Molef ulif</h1>
          <small className='block text-center text-[#606060] font-medium'>Asian Restaurant</small>

          <div className='info mt-5 flex justify-center items-center'>

            <div className='singleInfo grid px-3'>
                <AiFillStar className = 'flex mt-auto justify-center items-center'></AiFillStar>
                <h4 className='font-semibold text-[#4f4d58] '>3.7</h4>
            </div>

            <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>30</h4>
            </div>

            <div className='singleInfo grid px-3'>
                <GiPathDistance className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>0.7</h4>
            </div>

          </div>
        </div>


        <div className='singleRestaurant w-[220px] bg-colorTwo p-3 rounded-[10px] m-auto'>
          <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
            <img src= {food2} alt="" className='w-full h-full object-cover' />
          </div>
          <h1 className='restName block text-center font-bold opacity-90 pt-4'>La Fe</h1>
          <small className='block text-center text-[#606060] font-medium'>Sea Food Restaurant</small>

          <div className='info mt-5 flex justify-center items-center'>

            <div className='singleInfo grid px-3'>
                <AiFillStar className = 'flex mt-auto justify-center items-center'></AiFillStar>
                <h4 className='font-semibold text-[#4f4d58] '>4.7</h4>
            </div>

            <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>50</h4>
            </div>

            <div className='singleInfo grid px-3'>
                <GiPathDistance className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>2.7</h4>
            </div>

          </div>
        </div>


        <div className='singleRestaurant w-[220px] bg-colorThree p-3 rounded-[10px] m-auto'>
          <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
            <img src= {food3} alt="" className='w-full h-full object-cover' />
          </div>
          <h1 className='restName block text-center font-bold opacity-90 pt-4'>Pizzeria</h1>
          <small className='block text-center text-[#606060] font-medium'>Fast Food Restaurant</small>

          <div className='info mt-5 flex justify-center items-center'>

            <div className='singleInfo grid px-3'>
                <AiFillStar className = 'flex mt-auto justify-center items-center'></AiFillStar>
                <h4 className='font-semibold text-[#4f4d58] '>5.0</h4>
            </div>

            <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>70</h4>
            </div>

            <div className='singleInfo grid px-3'>
                <GiPathDistance className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>1.7</h4>
            </div>

          </div>
        </div>
        

        <div className='singleRestaurant w-[220px] bg-colorFour p-3 rounded-[10px] m-auto'>
          <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
            <img src= {food4} alt="" className='w-full h-full object-cover' />
          </div>
          <h1 className='restName block text-center font-bold opacity-90 pt-4'>Power House</h1>
          <small className='block text-center text-[#606060] font-medium'>Cocktail Bar</small>

          <div className='info mt-5 flex justify-center items-center'>

            <div className='singleInfo grid px-3'>
                <AiFillStar className = 'flex mt-auto justify-center items-center'></AiFillStar>
                <h4 className='font-semibold text-[#4f4d58] '>4.3</h4>
            </div>

            <div className='singleInfo border-x-2 grid px-3'>
                <MdMonetizationOn className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>60</h4>
            </div>

            <div className='singleInfo grid px-3'>
                <GiPathDistance className = 'flex mt-auto justify-center items-center'/>
                <h4 className='font-semibold text-[#4f4d58] '>1.3</h4>
            </div>

          </div>
        </div>
      

        </div>
        </div>
    </div>
  )
}

export default Body