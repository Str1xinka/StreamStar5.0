
import directcut from './../imgs/direct-cut.png'
import playbutton1 from './../imgs/playbutton1.png'


function Preview() {
  return (
           
 
<div class=" flex bottom-[1790px] left-[893px] relative">   
<div class="">
    <ul class="h-16">
      <li class="bg-streamstartext text-gray-500 pl-8 m-1 relative flex flex-col items-center">
        <img class="relative bottom-1 right-4" src={playbutton1} alt="" style={{width: '70px', height:'50px'}}></img>
        <span class="text-center relative right-4">PREVIEW</span>
      </li>
      <li class="bg-black text-gray-500 pl-8 m-1 relative flex flex-col items-center">
        <img class="relative bottom-1 right-4" src={playbutton1} alt="" style={{width: '70px', height:'50px'}}></img>
        <span class="text-center relative right-4">COMBO</span>
      </li>
      <li class="bg-black text-gray-500 pl-8 m-1 relative flex flex-col items-center">
        <img class="relative bottom-1 right-4" src={playbutton1} alt="" style={{width: '70px', height:'50px'}}></img>
        <span class="text-center relative right-4">PGM DIRECT</span>
      </li>
    </ul>      
  </div>      
  <div class="">
    <ul>
    <li class="bg-black text-gray-500 pl-8 m-1 relative flex flex-col items-center">
        <img class="relative bottom-1 right-4" src={directcut} alt="" style={{width: '70px', height:'50px'}}></img>
        <span class="text-center relative right-4">DIRECT CUT</span>
      </li>
      <li class="bg-black text-gray-500 pl-8 m-1 relative flex flex-col items-center">
        <img class="relative bottom-1 right-4" src={directcut} alt="" style={{width: '70px', height:'50px'}}></img>
        <span class="text-center relative right-4">CROSSFADE</span>
      </li>
      <li class="bg-black text-gray-500 pl-8 m-1 relative flex flex-col items-center">
        <img class="relative bottom-1 right-4" src={directcut} alt="" style={{width: '70px', height:'50px'}}></img>
        <span class="text-center relative right-4">TRANSITION</span>
      </li>
    </ul>
  </div>
  <div className="flex relative w-[243px] p-8 h-14 top-[228px] right-[245px] text-gray-500 text-center bg-black">TRANSITION SETTINGS</div>

  
 
</div>


    
    
      
       
        
    
    
       
     
  );
}

export default Preview;