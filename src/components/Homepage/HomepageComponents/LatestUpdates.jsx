import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const notificationsArr = [
  { title: "AIDEOA Hosts Successful Annual Conference", content: "Details about the conference..." },
  { title: "AIDEOA Launches New Initiative", content: "Information about the new initiative..." },
  { title: "AIDEOA Celebrates 10 Years", content: "Highlights of the last decade..." },
  { title: "AIDEOA Partners with Industry Leaders", content: "Collaboration details..." },
];
const arr=[
  {head:"Day 1",title:"Restricted Certificate को लेकर AIDEOA टीम की माननीय सांसद से मुलाकात",date:"Dec 12th, 2024",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"Restricted certificate को कोल इंडिया में डिपार्मेंटल प्रमोशन सिनियर आफिसर माइनिंग ग्रेड E2 मै  रिस्ट्रिक्टेड सर्टिफिकेट का मान्यता  लेकर आज दिनांक 27 अगस्त को AIDEOA कि टीम माननीय सांसद महोदय श्री चंद्र प्रकाश चौधरी,गिरिडीह लोकसभा, से मिला, Restricted Certificate को लेकर श्री सांसद महोदय ने की AIDEOA टीम को हर संभव सहयोग करने की बात कही, एवं कोल इंडिया लिमिटेड के साथ 29 तारीख को मीटिंग में इस मुद्दा को उठाने की बात कहा गयापूरी AIDEOA टीम के तरफ से श्री सांसद महोदय को बहुत-बहुत धन्यवाद🙏"},
  {head:"Day 2",title:"धारकों की नियुक्ति/पदोन्नति पर AIDEOA प्रतिनिधिमंडल की कोल इंडिया के चेयरमैन से सौहार्दपूर्ण वार्ताe",date:"Dec 14th, 2024",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"आज दिनांक 23.08.2024 को Restricted Certificate को मान्यता दिलाने हेतु AIDEOA के राष्ट्रीय अध्यक्ष श्री विकास दास, राष्ट्रीय महासचिव श्री राजीव कुमार तिवारी, एवं कार्यकारी अध्यक्ष श्री प्रदीप सिंह ने कोल इंडिया के अध्यक्ष आदरणीय श्री पी.एम. प्रसाद से मुलाकात की। इस मुलाकात का मुख्य उद्देश्य कोल इंडिया में Restricted Certificate धारकों की नियुक्ति और पदोन्नति को लेकर चर्चा करना था।"},
  {head:"Day 3",title:"कोल इंडिया द्वारा आयोजित सुरक्षित कोयला खनन कार्यशाला",date:"Dec 16th, 2024",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"कोयला खनन क्षेत्र में सुरक्षा एक प्रमुख चिंता का विषय है, और सुरक्षा मानकों में सुधार के लिए कोल इंडिया लिमिटेड ने इस एक दिवसीय सुरक्षित कोयला खनन कार्यशाला का आयोजन किया है। इस कार्यशाला का उद्देश्य खनन उद्योग में नवीनतम सुरक्षा उपायों को अपनाना, श्रमिकों को सुरक्षा प्रथाओं से अवगत कराना, और खनन के दौरान होने वाली दुर्घटनाओं की रोकथाम पर ध्यान केंद्रित करना है।इस कार्यक्रम में खनन क्षेत्र के विशेषज्ञ, सुरक्षा अधिकारी, इंजीनियर, और कोल इंडिया के वरिष्ठ अधिकारियों की भागीदारी रहेगी, जो सुरक्षा मानकों को और अधिक सुदृढ़ करने के लिए अपने अनुभव और ज्ञान साझा करेंगे।"},
  {head:"Day 4",title:"SECL माइनिंग सरदार से ओवरमैन ग्रेड-B पदोन्नति फॉलो-अप",date:"Dec 18th, 2024",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"हमें यह बताते हुए खुशी हो रही है कि SECL हसदेव प्रबंधन ने आखिरकार माइनिंग सरदारों की ओवरमैन ग्रेड-B में पदोन्नति का आदेश 12/02/2024 को जारी कर दिया है। यह आदेश AIDEOA द्वारा 25/01/2024 को किए गए धरना-प्रदर्शन के बाद मिला, जहाँ प्रबंधन ने 31/01/2024 तक पदोन्नति आदेश जारी करने का आश्वासन दिया था। हालाँकि, प्रबंधन द्वारा समय पर आदेश जारी नहीं किया जा सका, लेकिन पदोन्नति की तिथि को 25/01/2024 से प्रभावी माना गया है।लेकिन, मैनपावर बजट 2023-24 के तहत ओवरमैन ग्रेड-B में 28 माइनिंग सरदारों की पदोन्नति होनी थी, जिसमें से केवल 16 का ही प्रमोशन पत्र जारी किया गया है। इस स्थिति को ध्यान में रखते हुए AIDEOA ने शेष पदोन्नति जारी कराने के लिए उचित कार्रवाई करने का निर्णय लिया है।"}
]
const LatestUpdates = () => {
  const [expandIndex, setExpandIndex] = useState(null);
  const navigate= useNavigate()
  const handleItemClick = (index) => {
    // Toggle the clicked item; if it's already expanded, collapse it
    setExpandIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#070D18] text-white p-20 pt-24 max-sm:px-6">
      <div className="flex justify-around items-center gap-20 max-xl:gap-14 max-lg:gap-7 max-md:flex-col max-md:items-start">
        <div className="w-full">
          <h3 className="text-[35px] font-semibold mb-4">Latest Updates</h3>
          <p className="text-[16px] font-normal mb-6 max-lg:text-sm">
            Our recent news, updates, and highlights with links to full articles.
          </p>
          <div className="flex flex-col w-full">
            {arr.map((notification, idx) => (
              <div
                key={idx}
                className={`max-h-fit  w-full border-b-[0.5px] border-[#FFFFFF99] bg-gray-800 hover:bg-[#FFFFFF1A] ${expandIndex === idx ? "bg-gray-700" : ""}`}
              >
                <div className="flex my-5 justify-between mx-5 items-center h-full cursor-pointer" onClick={() => handleItemClick(idx)}>
                  <h5 className="font-semibold text-[18px] max-lg:text-sm">{notification.title}</h5>
                  <span className="text-gray-400">&gt;</span>
                </div>
                {expandIndex === idx && (
                  <div className="mx-5 h-[120px]  text-gray-300">
                    <div className="w-full my-2">
                      <h1>{notification.head}</h1>
                      <p>{notification.title}</p>
                    </div>
                    <button
                    onClick={()=>{navigate("/event")}}
            className="bg-white text-[#6E00FA] border p-3 font-semibold text-start text-[18px] hover:underline max-lg:text-sm"
          >
            Continue Reading
          </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-lg flex flex-col justify-between">
          <div>
            <img
              src="/groupimage.png"
              alt="Conference"
              className="rounded-lg mb-8 w-full h-[211px]"
            />
            <div className={`text-base flex flex-col gap-2 font-normal mb-4 leading-7 max-lg:text-sm overflow-hidden`}>
              <p className="font-semibold text-lg">1. Introduction</p>
              <p>
                1.1 Purpose: The purpose of this SRS is to provide a detailed
                description of the requirements for the AIDEOA website. It will
                outline the features, functionalities, and design specifications
                necessary to create a user-friendly, informative, and interactive
                platform for Mining Diploma and Degree holders.
              </p>
              <p>
                1.2 Scope: AIDEOA is a platform designed to bring together
                Mining Sirdar, Overman, Surveyor, Assistant Manager, and other
                professionals for optimistic decision-making and issue resolution.
              </p>
            </div>
          </div>
          <button
            onClick={() => setExpand(!expand)}
            className="text-[#6E00FA] font-semibold text-start text-[18px] hover:underline max-lg:text-sm"
          >
            Continue Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
