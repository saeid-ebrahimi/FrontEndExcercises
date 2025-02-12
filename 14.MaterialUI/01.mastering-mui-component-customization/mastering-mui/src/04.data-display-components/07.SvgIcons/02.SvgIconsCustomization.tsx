import { SettingIcon, HomeIcon } from "./icons";
export function SvgIconsCustomization() {
    return (
        <>
            <SettingIcon sx={{
                stroke: "#155E75",
                fontSize: 100
            }} />
            <HomeIcon sx={{
                fill: "#155E75",
                fontSize: 100
            }} />
        </>
    )
}