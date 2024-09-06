import {type FC, type PropsWithChildren } from 'react'

type HintBoxTypes = {
    mode: "hint"
}
type WarningBoxTypes = {
    mode: "warning";
    severity: "low" | "medium" | "high";
}
type InfoBoxTypes = HintBoxTypes | WarningBoxTypes

export const InfoBox: FC<PropsWithChildren<InfoBoxTypes>> = (props) => {
    const { mode, children } = props;
    if ( mode === "hint")
    {
        return (
             <aside className='infobox infobox-hint'>
                <p>{children}</p>
            </aside>
         )
    } else if (mode === "warning")
    {
        const {severity} = props
        return (
            <aside className={`infobox infobox-warning warning--${severity}`}>
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>
            )
    } else
    {
        return (null)
    }

}

export default InfoBox;