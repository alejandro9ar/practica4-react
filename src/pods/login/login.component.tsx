import React from "react";
import css from "./LoginComponent.css"; // Importa tus estilos CSS aquí

interface Props {
    onNavigate: () => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const {onNavigate} = props;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleNavigation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (username === "admin" && password === "test") {
            onNavigate();
        } else {
            setOpen(true);
        }
    };

    return (
        <div className={css.loginContainer}>
            <form className={css["login-form"]} onSubmit={handleNavigation}>
                <h2 className={css["login-header"]}>Welcome to the Login Page</h2>

                <div className={css["input-container"]}>
                    <label className={css["input-label"]}>Username:</label>
                    <input
                        className={css["input-field"]}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={css["input-container"]}>
                    <label className={css["input-label"]}>Password:</label>
                    <input
                        className={css["input-field"]}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className={css["login-button"]} type="submit">Login</button>
            </form>
        </div>
    );
};
