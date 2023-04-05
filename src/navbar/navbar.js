
import './App.css';
import calendar from './imgs/calendar.png'
import data from './imgs/data.png'
import house from './imgs/house.png'
import play from './imgs/play.png'
import streamstar from './imgs/streamstar.png'
function Navbar() {
  return (
       <nav className="flex bg-navbarblack h-16 ">
    <a href="#" class="mx-4 text-streamstartext hover:text-gray-300 flex items-center font-bold mx-90 pr-36 pl-12  text-4xl"><img src={streamstar} alt="" class=" pb-4  w-8" ></img>streamstar</a>
    <a href="#" class="mx-4 text-streamstartext py-2 blockb h-full flex items-center text-2xl font-bold px-16"><img src={house}  alt="" class="	pr-6 "></img>HOME</a>
    <a href="#" class="mx-4 text-streamstartext py-2 blockb h-full flex items-center text-2xl font-bold px-10"><img src={calendar} alt="" class="	pr-6 w-14 "></img>CALENDAR</a>
    <a href="#" class="mx-4 text-streamstartext py-2 blockb h-full flex items-center text-2xl font-bold px-14"><img src={data} alt="" class="	pr-6 "></img>DATA</a>
    <a href="#" class="mx-4 bg-gray-300 text-black py-2 blockb h-full flex items-center text-2xl font-bold px-16 "><img src={play} alt=""  class="	pr-6 "></img>STUDIO</a>
  </nav>

    
  );
}

export default Navbar;
