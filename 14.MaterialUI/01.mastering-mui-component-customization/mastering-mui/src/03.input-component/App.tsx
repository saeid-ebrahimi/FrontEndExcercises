import { RatingFunctionality } from "./08.Rating/01.RatingFunctionality";
import { RatingCustomization } from "./08.Rating/02.RatingCustomization";
import { RatingCustomizationUsingClassesObject } from "./08.Rating/03.RatingCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <RatingFunctionality />
        <RatingCustomization />
        <RatingCustomizationUsingClassesObject />
    </div>
}