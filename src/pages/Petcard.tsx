import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";

const Petcard = () => {
  return (
    <>
      <Stack direction="row">
        <Card sx={{ maxWidth: 300, marginLeft: 10 }}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Test1
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, marginLeft: 10 }}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Test1
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, marginLeft: 10 }}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Test1
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
          </CardActions>
        </Card>
      </Stack>
      <Stack direction="row" sx={{ marginTop: 10 }}>
        <Card sx={{ maxWidth: 300, marginLeft: 10 }}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Test1
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, marginLeft: 10 }}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Test1
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, marginLeft: 10 }}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Test1
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
          </CardActions>
        </Card>
      </Stack>
    </>
  );
};
export default Petcard;
