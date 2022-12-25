import React from 'react'

function Header(props) {
  return (
    <div className=" bg-bg dark:bg-[#20222f] pb-40">
          <div className="container py-9 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                Social Media Dashboard
              </h1>
              <span className="text-lg dark:text-[#939ab7]">Yotal Followers : 12.3456</span>
            </div>
            <div className="flex  items-center">
              <label
                htmlFor="checkbox"
                className=" font-semibold mr-2 cursor-pointer dark:text-white"
              >
                Dark Mode
              </label>
              <span>
                <input className="relative w-20 h-10 appearance-none rounded-full bg-gradient-to-r from-[#39a3cb] to-[#42c5a3] transition duration-200 before:rounded-full before:bg-[#333a54] before:w-9 before:h-9 before:right-1 before:top-[50%] before:translate-y-[-50%] before:absolute checked:before:right-10 cursor-pointer"
                  id="checkbox"
                  type="checkbox"
                  onChange={e=>props.handleMode(e)}
                />
              </span>
            </div>
          </div>
        </div>
  )
}

export default Header