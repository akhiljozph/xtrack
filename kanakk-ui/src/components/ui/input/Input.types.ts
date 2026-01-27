export type InputProps = {
    type: 'text' | 'textarea';
    label: string;
    placeholder: string;
    onChange: (value: string) => void;
};