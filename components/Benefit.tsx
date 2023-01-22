import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

type Props = {
  image: string;
  heading: string;
  body: string;
  type: string;
  elevation: number;
};

export default function Benefit({
  image,
  heading,
  body,
  type,
  elevation,
}: Props) {
  return (
    <Grid item xs={4} md={4}>
      <Paper className={type} elevation={elevation}>
        <CardMedia
          component="img"
          height="190"
          image={require("../images/" + image + ".webp")}
          alt=" benefit"
          className="benefit__image"
        />
        <div className="info">
          <h4 className="benefit__heading">{heading}</h4>
          <p className="benefit__body">{body}</p>
        </div>
      </Paper>
    </Grid>
  );
}
