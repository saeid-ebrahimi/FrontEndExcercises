import { ChevronRight } from "@mui/icons-material";
import { Checkbox, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

export type TPermission = {
    id: number;
    name: string;
    children?: TPermission[];
};

export function PermissionList({ permissions }: { permissions: TPermission[] }) {
    const [selectedPermissions, setSelectedPermissions] = useState<Set<number>>(new Set());
    const handlePermissionChange = (id: number) => {
        setSelectedPermissions(prev => {
            const next = new Set(prev);

            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }

            return next;
        })
    }

    return <List>
        {permissions.map((permission) => (
            <PermissionNode key={permission.id}
                permission={permission}
                selectedPermissions={selectedPermissions}
                onPermissionChange={handlePermissionChange}
            />
        ))}
    </List>
}

type TPermissionNodeProps = {
    permission: TPermission;
    selectedPermissions: Set<number>;
    onPermissionChange: (id: number) => void;
};

function PermissionNode({
    permission,
    selectedPermissions,
    onPermissionChange,
}: TPermissionNodeProps) {
    const [open, setOpen] = useState(false);
    const hasChildren = Boolean(permission.children?.length);

    return (
        <>
            <ListItem>
                {hasChildren ?
                    <ListItemButton
                        onClick={() => hasChildren && setOpen((prev) => !prev)}
                        sx={{
                            pl: 2,
                        }}
                    >
                        <ChevronRight sx={{ rotate: "90deg" }} />
                        <ListItemText primary={permission.name} />
                    </ListItemButton>
                    :
                    <>
                        <ListItemIcon>
                            <Checkbox checked={selectedPermissions.has(permission.id)} onChange={() => { onPermissionChange(permission.id) }} />
                        </ListItemIcon>
                        <ListItemText primary={permission.name} />
                    </>
                }

            </ListItem>
            {hasChildren &&
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ pl: 3 }}>
                        {permission.children?.map((child) => (
                            <PermissionNode
                                key={child.id}
                                permission={child}
                                selectedPermissions={selectedPermissions}
                                onPermissionChange={onPermissionChange}
                            />
                        ))}
                    </List>

                </Collapse>}
        </>
    );
}