//import React from "react";
import {
  MDBFooter,
  MDBContainer,
  //  MDBCol,
  //  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Footer = () => {
  return (
    <MDBFooter
      className=" text-center text-white"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.facebook.com/hkt456/"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="mailto:tamhuynhkhac@gmail.com"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/huynh.khac.tam/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/in/hkt456/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/hkt456/"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        //div>style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: |
        <a className="text-white" href="https://github.com/hkt456/">
          {" "}
          Huynh Khac Tam{" "}
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
