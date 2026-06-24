const Navbar = () => {
    return(
         <div className="grid grid-cols-2 md:grid-cols-3 items-center p-3 md:px-10">
        <div className="flex flex-col items-start font-jubilee text-2xl md:text-4xl text-amber-50 leading-none">
          <div className="flex flex-col items-center ">
            <span>The</span>
            <span>Obsidian</span>
            <span className="block translate-x-5 md:translate-x-10">Assembly</span>
          </div>
        </div>

        <div className="hidden items-center justify-center gap-4 md:flex">
          <span className="font-switzer uppercase bg-gray-50/25 py-1.5 px-24 rounded-lg text-amber-50">
            places
          </span>

          <div className="w-[1px] h-16 bg-black shrink-0"></div>

          <span className="font-switzer uppercase bg-gray-50/25 py-1.5 px-24 rounded-lg text-amber-50">
            objects
          </span>
        </div>
        <div className="flex justify-end">
          <span className="font-switzer uppercase bg-amber-50/75 py-2 pl-20 md:pl-44 pr-4 rounded-lg text-black">
            menu
          </span>
        </div>
      </div>
    )
}

export default Navbar