import { createComponent } from 'cf-style-container';

const InfoDisplay = createComponent(({ boardSize }) => ({
    width: 40,
    height: 40,
    // padding: "auto 0px",
    border: `1px solid black`,
    lineHeight: 1,
    textAlign: 'center',
    fontSize: 18
}));

export default InfoDisplay;
