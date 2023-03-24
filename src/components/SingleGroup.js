import React from "react";
import { Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const SingleGroup = ({ data }) => {
  return (
    <div className="d-flex justify-content-between my-2">
      <div className="d-flex align-items-center ">
     <div>
     <Image
        width="36px"
        height="36px"
        className="rounded-full me-2"
        src={data.groupImg}
        alt="group-img"
      />
     </div>
     <h6 className="">{data.groupName}</h6>

      </div>
       <Button className="rounded-pill" variant="light"> Follow </Button>
    </div>
  );
};

export default SingleGroup;
