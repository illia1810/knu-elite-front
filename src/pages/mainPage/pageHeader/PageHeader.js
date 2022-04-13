import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { MyContext } from "../../../global";
import "./styles.css";

function PageHeader() {
  const { userInfo } = useContext(MyContext);

  return (
    <div className="main-header">
      <div className="main-header__right">
        <Button className="button__new-task" variant="primary" size="lg">
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
    </div>
  );
}

export default PageHeader;
