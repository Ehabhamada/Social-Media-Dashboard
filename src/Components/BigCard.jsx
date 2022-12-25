import React from 'react'


function BigCard(props) {
  return (
  
    <div className={props.cssclass}>
<div className="flex items-center justify-center gap-1 pb-5">
  <span className={props.iconcolor}>
    {props.icon}
  </span>
  <span className="text-sm">{props.title}</span>
</div>
<h2 className="px text-6xl font-bold text-slate-800 dark:text-white ">
{props.followers}
</h2>
<p className="font-normal uppercase tracking-[0.3em] pt-1">
  {props.followtyp}
</p>
<div className={" font-semibold flex items-center justify-center gap-1 pt-6 "+props.arrowcolor}>
  <span>
    {props.arrow}
  </span>
  <span>{props.Today + " Today"}</span>
</div>
  </div>
  
   )
}

export default BigCard