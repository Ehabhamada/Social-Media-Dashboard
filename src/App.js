import { useState } from "react";
import{Header,BigCard,SmallCard}from "./Components"
import {bigdata,smalldata} from "./data";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <div className={darkMode?"dark":""} nambase="Social-Media-Dashboard">
      <div className="  text-slate-400 dark:text-slate-300  dark:bg-darkbg-dark pb-12">
        <Header handleMode={handleModeChange}/>
        <div className="container -mt-40  ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 ">
        {bigdata.map((el)=><BigCard key={el.id} icon={el.icon} iconcolor={el.iconcolor} title={el.title} followers={el.followers}cssclass={el.cssclass}followtyp={el.followtyp} Today={el.Today} arrow={el.arrow} arrowcolor={el.arrowcolor}/>    
)}
           </div>
           <div className="mt-12">
            <h2 className="text-2xl font-bold"> Overview - Today </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-6 ">
            {smalldata.map((el)=><SmallCard key={el.id} icon={el.icon} iconcolor={el.iconcolor} title={el.title}  arrow={el.arrow} textcolor={el.textcolor} views={el.views} percent={el.percent}/>    
)}
            

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;