import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Sport from "../../image/sports.png";
import { Divider, Typography } from "@mui/material";

import Icon from "@mui/material/Icon";

const TextLable = (props) => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "10px",
          padding: "10px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Icon sx={{ fontSize: 40, color: "#7b9cd1" }}>{props.icon}</Icon>
        </div>
        <div
          style={{
            flex: 3,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Typography variant="h4" ml={2} sx={{ fontWeight: "bold" }}>
            {" "}
            {props.lable}
          </Typography>
        </div>
        <div style={{ flex: 5 }}>
          <Typography variant="h4"> {props.title}</Typography>
        </div>
      </div>
    </>
  );
};

const UI = (props) => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "420px",
          background: "#e1e8f2",
          borderRadius: "20px",
          padding: "10px",
          borderTopStyle: "solid",
          borderTopColor: "#7b9cd1",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "10px",
            justifyContent: "center",
            margin: "10px",
            marginTop: "60px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 200,
              borderStyle: "solid",
              padding: "10px",
              borderColor: "white",
              borderRadius: "20px",
            }}
            image={Sport}
            alt="Live"
          />
        </div>
        <div
          style={{
            flex: 2,
            margin: "10px",
            padding: "5px",
          }}
        >
          <Typography variant="h3" align="center">
            {" "}
            PERSONAL INFORMATION
          </Typography>
          <Divider />
          <TextLable icon="info" lable="ID" title={props.id} />
          <TextLable icon="person" lable="NAME" title={props.name} />
          <TextLable icon="email" lable="Email" title={props.email} />
          <TextLable icon="phone" lable="MOBILE" title={props.mobile} />
        </div>
      </div>
    </>
  );
};

export { UI, TextLable };
