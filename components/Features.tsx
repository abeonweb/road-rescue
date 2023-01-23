import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Feature from './Feature'
import {features} from "../data"

export default function Features(){
    const featuresList = features.map(feature =>(
        <Feature
          key={feature.id}
          type={"feature"}
          elevation={0}
          bgColor={"transparent"}
          image={feature.image}
          heading={feature.heading}
          body={feature.body}
      />
    )) 

    return (
        <section className="section section__features">
          <h2 className="features--title">How we achieve great results</h2>
          <Container fixed>
            <Grid container 
              columnSpacing={4} 
              rowSpacing={4} 
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {featuresList}
            </Grid>
          </Container>
      </section>
    )
}