import styles from "./NewsCard.module.css"

const NewsCard = () => {
  return (
    <div className="flex max-w-screen-xl bg-gray-200 rounded-xl w-11/12 m-auto p-10 justify-between">
        <div className="rounded-xl overflow-hidden">
            <img src="Rectangle 5.png" alt="slider-image" />
        </div>
        <div className="flex flex-col justify-evenly w-2/4 ">
            <div className="font-medium">
                <h3>18 जुलाई 2023 को CIL HQ में CIL निदेशक (चेयरमैन ) आदरणीय श्री पीएम प्रसाद सर से AIDEOA के राष्ट्रीय महासचिव श्री आर के तिवारी एवं कार्यकारिणी अध्यक्ष श्री प्रदीप सिंह के साथ मीटिंग हुआ। </h3>
            </div>
            <div className="text-gray-500">
                <p>आज दिनांक 18 जुलाई 2023 को CIL HQ में , कोल इंडिया लिमिटेड के अध्यक्ष- सह प्रबंध निदेशक (चेयरमैन ) आदरणीय श्री पीएम प्रसाद सर से AIDEOA के राष्ट्रीय महासचिव श्री आर के तिवारी एवं कार्यकारिणी अध्यक्ष श्री प्रदीप सिंह के साथ मीटिंग हुआ। जिसमें 08 सूत्री मांग पत्र का ज्ञापन सह धरना-प्रदर्शन का पत्र शौपा गया , जिसमें मुद्दा कोल इंडिया लिमिटेड के द्वारा लाया गया नया प्रमोशन पॉलिसी से संबंधित के संबंध में बातचीत किया गया..</p>
            </div>
        </div>
    </div>
  )
}
export default NewsCard