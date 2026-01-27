import type { InputProps } from "./Input.types";

import './Input.scss';

const Input = (props: InputProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props?.onChange(event.target.value);
    }

    return (
        <div className="kank-input-wrapper">
            <label className="kank-label">{props?.label}</label>
            <input className="kank-input" type={props?.type} placeholder={props?.placeholder} onChange={handleChange} />
        </div>
    )
}
export default Input;