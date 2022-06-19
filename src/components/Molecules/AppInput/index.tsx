import { Input, InputWrapper } from "@mantine/core";
import { FC } from "react";

export const AppInput: FC<any> = ({ label, description, errorMessge, placeholder, value, onChange }) => {


    return (
        <InputWrapper
            id="input-demo"
            required
            label={label}
            description={description}
            error={errorMessge}
        >
            <Input id="input-demo" placeholder={placeholder} value={value} onChange={onChange} />
        </InputWrapper>
    );
}