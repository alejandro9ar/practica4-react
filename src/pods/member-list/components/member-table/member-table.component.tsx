import React from "react";
import { Member } from "../../member-list.vm";
import { MemberTableRow } from "./member-table-row.component";
import css from './member-table-styles.module.css';

interface Props {
    members: Member[];
}

export const MemberTable: React.FC<Props> = (props) => {
    const { members } = props;

    return (
        <table className={css["member-table"]}>
            <thead>
            <tr>
                <th>Avatar</th>
                <th align="right">Id</th>
                <th align="right">Name</th>
            </tr>
            </thead>
            <tbody>
            {members.map((member) => (
                <MemberTableRow key={member.id} member={member} />
            ))}
            </tbody>
        </table>
    );
};
