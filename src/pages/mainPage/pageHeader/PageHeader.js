import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import "./styles.css";

function PageHeader() {
  return (
    <div className="main-header">
      <div className="main-header__right">
        <Button className="button__new-task" variant="primary" size="lg">
            Create Task +
        </Button>
        <Button className="" variant="warning" size="lg">
          Schedule a call<BiPhoneCall className="call-icon" />
        </Button>
      </div>
      <div className="main-header__left">
        PM: Iryna Potienko
        <GoPerson className="profile-icon" />
      </div>
    </div>
  );
}

export default PageHeader;
