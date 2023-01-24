import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function Faq() {
    return (
        <section className="section__faq">
            <h2 className="page--title faq-title">Frequently asked questions</h2>
            <div className="accordion">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <h3 className="accordion--title">How long does Cold Mix Asphalt last after purchase?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="accordion-answer">The mixture can last for up to two years if properly stored.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <h3 className="accordion--title">Can Cold Mix Asphalt be used in the rain?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="accordion-answer">Cold mix asphalt can be used in any weather.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <h3 className="accordion--title">Is Cold Mix Asphalt affordable?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="accordion-answer">Yes it is. you end up saving more directly on using it as well a saving costs on vehicle repairs and damages.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <h3 className="accordion--title">How is the asphalt used?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="accordion-answer">Clean out the area to patch. Fill it up with the cold mix asphalt, enough to form a small mound. 
                        Finally, apply pressure to compact it. Its that easy.</p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    )
}
