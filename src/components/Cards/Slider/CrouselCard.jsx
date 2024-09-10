const CrouselCard = ({shadowColor="gray-400"}) => {
    return (
        <div className={`bg-white items-center shadow-xl shadow-${shadowColor} p-3  lg:h-30 min-w-32  lg:min-w-56 rounded-full flex justify-evenly`}>
            <div>
              <img className=" w-[84px]  lg:w-16 " src="base.png" alt="company_logo" />
            </div>
            <div className="text-black text-[8px]  lg:text-xs  font-normal lg:font-medium ">
              <p className="">East Coalfields Limited</p>
            </div>
        </div>
      )
}
export default CrouselCard