import React from "react";
import { MemberDetailComponent } from "./member-detail.component";

interface Props {
    id: string;
}

export const MemberDetailContainer: React.FC<Props> = (props) => {
    const { id } = props;
    return (
        <MemberDetailComponent id={id} />
    );
};
