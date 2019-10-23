import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

// Import individual thumbnails

// This is ugly, will fix later. sry
import placeholder from "./headshots/profile-placeholder.svg";
import truitt from "./headshots/truitt.jpg";
import nair from "./headshots/nair.jpg";
import gooneratne from "./headshots/gooneratne.jpg";
import yanchencko from "./headshots/yanchencko.jpg";
import rein from "./headshots/rein.jpg";
import chua from "./headshots/chua.jpg";
import wu from "./headshots/wu.jpg";
import binette from "./headshots/binette.jpg";
import luo from "./headshots/luo.jpg";
import middlemiss from "./headshots/middlemiss.png";
import gong from "./headshots/gong.png";
import greenberg from "./headshots/greenberg.jpg";
import yang from "./headshots/yang.jpg";
import klett from "./headshots/klett.jpg";
import williamson from "./headshots/williamson.jpg";
import alqabandi from "./headshots/alqabandi.jpg";
import baig from "./headshots/baig.jpg";
import levy from "./headshots/levy.jpg";
import moiseyev from "./headshots/moiseyev.jpg";
import fan from "./headshots/fan.jpg";

// compose dictionary of headshots for people that have headshots
const headshots = {
  "Luke	Truitt": truitt,
  "Varun Nair": nair,
  "Mary	Gooneratne": gooneratne,
  "Anna	Yanchencko": yanchencko,
  "David	Rein": rein,
  "Jia Rong	Chua": chua,
  "Lindsay	Wu": wu,
  "Olivier Binette": binette,
  "Qingying	Luo": luo,
  "Ryan	Middlemiss": middlemiss,
  "Yishu	Gong": gong,
  "Morris	Greenberg": greenberg,
  "Hang	Yang": yang,
  "Phoebe	Klett": klett,
  "Rachel	Williamson": williamson,
  "Tima	Alqabandi": alqabandi,
  "Yasa	Baig": baig,
  "Ben	Levy": levy,
  "Nicole	Moiseyev": moiseyev,
  "Shuyi	Fan": fan
};

function Person(props) {
  console.log(props.img);
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "1rem" }}>
      <div className="person-image">
        <img
          src={props.img === "" ? placeholder : headshots[props.name]}
          style={{
            height: "120px",
            width: "120px",
            objectFit: "cover",
            borderRadius: "100%"
          }}
          onClick={props.onClick}
        />
      </div>
      <Row>
        <Col xl={12}>
          <center>
            <div style={{ display: "inline-block", padding: "0.5rem 0 0 0" }}>
              <Link to="/">
                <div
                  className="github-icon button ripple"
                  style={{ float: "left" }}
                ></div>
              </Link>
              <Link to="/">
                <div
                  className="linkedin-icon button"
                  style={{ float: "left" }}
                ></div>
              </Link>
            </div>
          </center>
        </Col>
      </Row>
      <div style={{ color: "#f0efe5" }}>
        <div style={{ fontSize: "1.5rem" }}>{props.name} </div>
        {props.team} Team
      </div>
    </Col>
  );
}
export default Person;
