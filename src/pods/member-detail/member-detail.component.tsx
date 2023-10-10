import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router";
import css from "./member-detail-styles.css"; // Importa tus estilos CSS aquí

interface Props {
    id: string;
}

export const MemberDetailComponent: React.FC<Props> = (props) => {
    const { id } = props;

    return (
        <div className={css["card"]}>
            <h2>Hello from Detail page</h2>
            <h3>User Id: {id}</h3>
            <Link to={routes.members}>Back</Link>
        </div>
    );
};
