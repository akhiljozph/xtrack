import type { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
    return (
        <>
            <label>{props?.label}</label>
            <input type={props?.type} />
        </>
    )
}
export default Input;