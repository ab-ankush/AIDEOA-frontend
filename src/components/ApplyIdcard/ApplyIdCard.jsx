
import TopImageCard from '../../components/Cards/TopImageCard'
import DownloadIdCardButton from '../Cards/DownloadIdCardButton'
import Footer from '../Cards/Footer'
import FormContainer from './IdCardComponents.jsx/FormContainer'
const ApplyIdCard = () => {
  return (
    <div className='pt-14'>
      <TopImageCard title={"Apply ID Card"} description={"Join Aidoea Membership "} downloadBtn={
        <DownloadIdCardButton />} />
      <FormContainer />
      <Footer />

    </div>
  )
}

export default ApplyIdCard