import stream1 from './stream1.png';
import directcut from './direct-cut.png'
import playbutton1 from './playbutton1.png'
import playbutton2 from './playbutton2.png'
import playbutton3 from './playbutton3.png'
function Preview() {
  return (
           
    
<<<<<<< HEAD
      <div class=" flex bottom-892 left-48 relative overflow-hidden">   
     <div class=" border-b-6 border-b-green-500"><img class="   " src={stream1} alt="" style={{ width: '700px', height: '415px' }}></img></div>
      <div class="h-16">
      <ul class="">
         <li class="bg-black text-gray-500 pl-8 m-1 relative "> <img class=" flex relative  bottom-1" src={playbutton1} alt=""  style={{width: '70px', height:'50px'}}></img> PREVIEW</li>
         <li class="bg-black text-gray-500 pl-8 h-16 relative m-1"> <img class=" flex relative  left-1" src={playbutton3} alt=""  style={{width: '50px', height:'30px'}}></img>COMBO  </li>
         <li class="bg-black text-gray-500 pl-8 h-16 relative  m-1 "><img class="flex relative left-2" src={playbutton2} alt="" style={{width: '40px', height:'25px'}}></img> PGM DEFECT</li>

=======
   
    <><div><img class="flex left-48 bottom-391 absolute" src={stream1} alt="" style={{ width: '700px', height: '430px' }}></img></div>
      <div class="flex left-892 bottom-605 absolute">
       <ul>
         <li class="bg-black text-gray-500 p-6">Preview</li>
         <li class="bg-black text-gray-500 p-6">Combo</li>
         <li class="bg-black text-gray-500 p-6 w-28 text-xs">PGM Direct</li>
       </ul>
     </div>
     <div class="flex left-990 bottom-605 absolute">
       <ul>
         <li class="bg-black text-gray-500 p-6">Layer 1</li>
         <li class="bg-black text-gray-500 p-6">Layer 2</li>
         <li class="bg-black text-gray-500 p-6 w-28">Layer 5</li>
       </ul>
     </div>
     <div class="flex left-892 bottom-540 absolute">
       <ul>
         <li class="bg-black text-gray-500 p-6 w-50 text-center">Layer 1</li>
>>>>>>> parent of 4acd817 (d)
         
       </ul>
       
     </div>
       
     <div class="  ">
     <ul>
         <li class="bg-black text-gray-500 pl-3 m-1"> <img  class="flex relative left-5" src={directcut} alt="" ></img>DIRECT CUT</li>
         <li class="bg-black text-gray-500 p-4  m-1">CROSSFADE</li>
         <li class="bg-black text-gray-500 p-4 m-1 ">TRANSITON </li>
        
       </ul>
     </div>
    <div className=" flex relative w-246 p-8 h-14 top-96  right-256 text-white text-center bg-black">TRANSTION SETTINGS</div>
    <div class=" flex relative right-230 border-b-6 border-b-red-500  "><img  src={stream1} alt="" style={{ width: '700px', height: '415px' }}></img></div>
    </div>
    

    
    
      
       
        
    
    
       
     
  );
}

export default Preview;