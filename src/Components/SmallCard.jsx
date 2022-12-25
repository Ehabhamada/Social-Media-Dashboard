import React from 'react'



function SmallCard(props) {
  return (
              <div className="card-sm dark:bg-darkbg:hover[#333a56]">
                    <div className="flex items-center justify-between">
                      <h4 className=" font-bold">{props.title}</h4>
                      {props.icon}
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <h3 className=" font-black text-2xl text-slate-800 dark:text-white">
                        {" "}
                        {props.views}
                      </h3>
                      <div className={props.textcolor + " flex items-center gap-1 text-sm"}>
                        <span>
                        {props.arrow}
                        </span>
                        <span>{props.percent}</span>
                      </div>
                    </div>
                  </div>
  )
}

export default SmallCard