import './checkbox.scss';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
};

const Checkbox = ({ label, checked, onChange, disabled }: CheckboxProps) => {
  return (
    <label className="label">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-label={label}
        aria-checked={checked ? 'true' : 'false'}
      />
      {label}
    </label>
  );
};

export default Checkbox;
