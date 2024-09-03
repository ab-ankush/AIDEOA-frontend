import FormDescription from "./components/FormDescription";
import HeaderImg from "./components/HeaderImg";
import Info from "./components/Info";
import SelectSwitch from "./components/SelectSwitch";
import Form from "./components/Form";
import CrouselHeader from "./components/CrouselHeader";
import CrouselCardList from "./components/CrouselCardList";
import GetUpdata from "./components/GetUpdata";

const MutualTransferPage = () => {
  return (
    <div>
      <HeaderImg />
      <Info />
      <FormDescription />
      <SelectSwitch />
      <Form />
      <CrouselHeader />
      <CrouselCardList />
      <GetUpdata />
    </div>
  );
};
export default MutualTransferPage;
