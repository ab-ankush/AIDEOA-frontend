import FormDescription from "./components/FormDescription";
import HeaderImg from "./components/HeaderImg";
import Info from "./components/Info";
import SelectSwitch from "./components/SelectSwitch";
import Form from "./components/Form";
import CrouselHeader from "./components/CrouselHeader";
import CrouselCardList from "./components/CrouselCardList";

import EmailNotiCard from "../Cards/EmailNotiCard";

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
      <EmailNotiCard />
    </div>
  );
};
export default MutualTransferPage;
