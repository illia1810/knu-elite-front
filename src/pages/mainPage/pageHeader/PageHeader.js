import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { MyContext } from "../../../global";
import NewTask from "../newTask/NewTask";
import "./styles.css";

function PageHeader() {
  const { userInfo } = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);

  const openModalWindow = () => {
    setShowModal((prevState) => !prevState);
  }

  return (
    <div className="main-header">
      <div className="main-header__right">
        <Button className="button__new-task" variant="primary" size="lg" onClick={openModalWindow} >
          Create Task +
        </Button>
        <Button className="" variant="warning" size="lg">
          Schedule a call
          <BiPhoneCall className="call-icon" />
        </Button>
      </div>
      <div className="main-header__left">
      {`${userInfo.role}: ${userInfo.name}`}
        <GoPerson className="profile-icon" />
      </div>
      {showModal && <NewTask title="Create" modalShown={showModal} />}
    </div>
  );
}

export default PageHeader;
