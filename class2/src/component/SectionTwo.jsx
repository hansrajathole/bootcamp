import React from "react";
import image1 from  "../assets/S-2-image-1.webp"
import image2 from  "../assets/S-2-image-2.webp"
import image3 from  "../assets/S-2-image-3.webp"
import image4 from  "../assets/S-2-image-4.webp"
import image5 from  "../assets/S-2-image-5.webp"

const SectionTwo = () => {
  return (
    <div>
      <div className="h-[700px] flex overflow-x-auto mt-[5%] gap-5 custom-scroll ">
        <img src={image1} alt="" className="w-[450px] object-cover rounded-[8em]"/>
        <img src={image2} alt="" className="w-[450px] object-cover rounded-[8em]"/>
        <img src={image3} alt="" className="w-[450px] object-cover rounded-[8em]"/>
        <img src={image4} alt="" className="w-[450px] object-cover rounded-[8em]"/>
        <img src={image5} alt="" className="w-[450px] object-cover rounded-[8em]"/>
      </div>
      <div className="mt-12 px-[5%]">
        <p className="text-2xl font-[500]">
          NiceAtNoon is een fijnschalige design studio voor merken die de
          hoofden en de harten van hun publiek willen veroveren. Geobsedeerd
          door de magie van design, geloven we sterk in de kracht van
          'story-driven design'; het geeft jouw unieke merkverhaal
          geloofwaardigheid, zeggingskracht en een niet te negeren
          aantrekkingskracht. Raak en verbind jouw doelgroepen als nooit
          tevoren!
        </p>
        <button className="mt-5 px-8 py-3 bg-white rounded-[1em] font-medium ">Leen ons kennens <i class="ri-arrow-right-line pl-4"></i></button>
      </div>
      
    </div>
  );
};  

export default SectionTwo;
