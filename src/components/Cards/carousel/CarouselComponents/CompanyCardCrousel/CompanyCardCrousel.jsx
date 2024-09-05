import CompanyCard from "./CompanyCard/CompanyCard";
const data = [
  "Central Coalfields Limited",
  "Eastern Coalfields Limited",
  "Mahandi Coalfields Limited",
  "Bharat Cooking Coal Limited",
  "South Eastern Coalfields Limited",
  "Central Coalfields Limited",
  "Eastern Coalfields Limited",
  "Mahandi Coalfields Limited",
  "Bharat Cooking Coal Limited",
  "South Eastern Coalfields Limited",
  "Central Coalfields Limited",
  "Eastern Coalfields Limited",
  "Mahandi Coalfields Limited",
  "Bharat Cooking Coal Limited",
  "South Eastern Coalfields Limited",
];
const CompanyCardCrousel = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap max-w-fit m-auto">
      <div className="animate-customscroll items-center flex gap-8 pb-10 ">
       {
        data.map((item,idx)=>{
          return  <CompanyCard key={idx} title={item}/>
      
        })
       }
      </div>

      <div className="animate-customscrollreverse flex items-center   gap-8 pb-10 ">
      {
        data.map((item,idx)=>{
          return  <CompanyCard key={idx} title={item}/>
      
        })
       }
      </div>
    </div>
  );
};
export default CompanyCardCrousel;
