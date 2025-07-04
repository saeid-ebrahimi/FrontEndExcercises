import { AppModal } from "./AppModal";

export default function EditPost() {
    const handleEditPost = async () => {

    }
    return <AppModal trigger={{ text: "Edit", variant: "secondary" }
    } action={{ text: "Edit  Post", func: handleEditPost }} title={`Edit Post`} content={``} />
}