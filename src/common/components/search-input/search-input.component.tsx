import React from "react";
import { useDebounce } from "./search-input.hook";
import css from "./search-input-styles-module.css"; // Importa los estilos CSS como un objeto

interface Props {
    defaultSearch?: string;
    onSearch: (query: string) => void;
    placeholder: string;
    delay?: number;
    variant?: "outlined" | "standard" | "filled";
    fullWidth?: boolean;
}

export const SearchInput: React.FC<Props> = (props) => {
    const { onSearch, defaultSearch = "", placeholder, delay, variant, fullWidth } = props;
    const [inputValue, setInputValue] = React.useState(defaultSearch);
    const debouncedValue = useDebounce(inputValue, delay);

    React.useEffect(() => {
        onSearch(debouncedValue);
    }, [debouncedValue]);

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);
    };

    return (
        <input
            className={`${css["input-container"]} ${variant === "outlined" ? css["outlined"] : ""}`}
            type="search"
            value={inputValue}
            onChange={handleOnChangeInput}
            placeholder={placeholder}
            style={{ width: fullWidth ? "100%" : "auto" }}
        />
    );
};
