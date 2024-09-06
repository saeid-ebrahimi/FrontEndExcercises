import { ChannelList, useChatContext} from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview} from "./";
import {Cookie} from "universal-cookie";
import HospitalIcon from "../assets/hospital.png"
import LogoutIcon from "../assets/logout.png"
const SideBar = () => (
    <div className={"channel-list__sidebar"}>
        <div className={"channel-list__sidebar__icon1"}>
            <div className={"icon1__inner"}>
                <img src={HospitalIcon} alt={"Hospital"} width={30}/>
            </div>
        </div>
        <div className={"channel-list__sidebar__icon2"}>
            <div className={"icon2__inner"}>
                <img src={LogoutIcon} alt={"Logout"} width={30}/>
            </div>
        </div>
    </div>
)
const CompanyHeader = () => (
    <div className={"channel-list__header"}>
        <p className={"channel-list__header__text"}>Medical Pager</p>

    </div>
)
function ChannelListContainer() {
    return (
        <>
            <SideBar/>
            <div className={"channel-list__list__wrapper"}>
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={ () => {}}
                    list={(listProps)=> ( <TeamChannelList {...listProps} type="team" /> )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview {...previewProps} type={"team"} />
                    ) }
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={ () => {}}
                    list={(listProps)=> ( <TeamChannelList {...listProps} type="team" /> )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview {...previewProps} type={"team"} />
                    ) }
                />
            </div>
        </>
    )
}
export default ChannelListContainer;