import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const CardViews = (props) => {
  return (
    <Card
      className="container"
      sx={{ display: "flex" }}
      style={{
        width: "50%",
        borderBottomColor: "green",
        borderBottomStyle: "solid",
        borderRightColor: "red",
        borderRightStyle: "solid",
        marginBottom: "20px",
        borderRadius: "20px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={props.image}
        alt="Live"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.dec}
          </Typography>
          <Divider />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.addBy}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
export default CardViews;
