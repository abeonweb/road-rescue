import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";

type Props = {
  image: string;
  heading: string;
  body: string;
  type: string;
  elevation: number;
  bgColor: string;
};

export default function Feature({
  image,
  heading,
  body,
  type,
  elevation,
  bgColor,
}: Props) {
  return (
    <Grid className={type} item xs={4} md={4}>
      <Paper
        sx={{
          backgroundColor: bgColor,
          color: "rgba(61, 61, 61, 0.9)",
        }}
        elevation={elevation}
      >
        <span className="feature-image-container shadow">
          <Image
            className="feature-image"
            src={`/${image}.png`}
            alt={image + " icon"}
            width={35}
            height={35}
          />
        </span>
        <div className="feature-info">
          <h4 className="feature-title">{heading}</h4>
          <p className="feature-body">{body}</p>
        </div>
      </Paper>
    </Grid>
  );
}
