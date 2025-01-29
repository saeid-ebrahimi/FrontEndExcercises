import { RatingFunctionality } from "./08.Rating/01.RatingFunctionality";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <RatingFunctionality />
    </div>
}