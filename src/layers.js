
import './index.css';

function Layers() {
  return (
           
    <body className='bg-streamstargray h-screen'>
    <div>  
    <header class="flex  bg-streamstargray">
     <div class=" pt-4 pl-14 text-gray-500 text-xl">LAYERS</div>
    
     <div class="pl-20 text-green-500 pt-8 font-bold text-xl ">CAM4 / QA2 / QA4</div>
     <div class="pt-4 pl-52 pr-60 text-gray-500 text-xl ">PREVIEW</div>
     <div class="text-gray-500 pt-4 pr-14 text-xl ">MIXER MODES</div>
     <div class="pl-5 pt-4 pr-5 text-xl bg-gray-400 "> PGM-1</div>
     <div class=" text-gray-500 pl-5 pt-4 pr-10 text-xl">PGM-2</div>
     <div class="text-gray-500 pt-4 pr-10 text-xl">PGM-3</div>
     <div class="text-gray-500 pt-4 pr-10 text-xl">PGM-4</div>
     <div class="text-white pt-4 pr-10 text-xl">PGM-5</div>
     <div class="text-gray pl-36 pt-4 pr-10 text-2xl">00:00:00</div></header>
     <div class=" w-48 h-64 p-4 text-center">
       <ul>
         <li class="bg-black text-gray-500 p-4 mb-2 ">Layer 1</li>
         <li class="bg-black text-gray-500 p-4 mb-2 ">Layer 2</li>
         <li class="bg-black text-gray-500 p-4 mb-2 ">Layer 3</li>
         <li class="bg-black text-gray-500 p-4 mb-2 ">Layer 4</li>
         <li class="bg-black text-gray-500 p-4 mb-2   ">Layer 5</li>
       </ul>
     </div>
     <div class=" w-48 h-32 pt-24 text-center flex flex-row justify-center">
       <button class="bg-streamstarbuttonbackground text-gray-500 px-4 py-2  mb-2">ADD</button>
       <button class="bg-streamstarbuttonbackground text-gray-500 px-4 py-2 mb-2">CLEAR</button>
     </div>
   
     <div class=" w-48 h-64 p-4 pt-11 text-center">
       <ul>
         <li class="bg-gray-400 text-black mt-8 p-4 mb-2 ">Q-BANK-A </li>
         <li class="bg-black text-gray-500 p-4 mb-2 ">Q-BANK-B </li>
         <li class="bg-black text-gray-500 p-4 mb-2 ">Q-BANK-C </li>
         <li class="bg-black text-gray-500 p-4 mb-2 ">ACTIONS-A</li>
         <li class="bg-black text-gray-500 p-4 mb-2 ">ACTIONS-B</li>
       </ul>
       </div>
       </div>
       </body>
     
  );
}

export default Layers;
