import React from "react";
import { generatePath, Link } from "react-router-dom";
import { Member } from "../../member-list.vm";
import css from './member-table-styles.module.css';

interface Props {
    member: Member;
}

export const MemberTableRow: React.FC<Props> = (props) => {
    const { member } = props;

    return (
        <tr className={css["member-table-row"]}>
            <td>
                <img
                    alt={`${member.id} avatar`}
                    src={member.avatar_url}
                />
            </td>
            <td>{member.id}</td>
            <td>
                <Link to={generatePath("/detail/:id", { id: member.login })} className={css["member-table-row-link"]}>
                    {member.login}
                </Link>
            </td>
        </tr>
    );
};
