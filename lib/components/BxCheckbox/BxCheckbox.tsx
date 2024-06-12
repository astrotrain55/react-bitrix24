import { defaultProps, type Props } from './props';
import styles from './styles.module.css';
import { ClassListType, getClassName } from '../../utils/getClassName.ts';

export function BxCheckbox({ children, ...props }: Partial<Props>) {
  const {
    onChange = () => null,
    value = defaultProps.value,
    name = defaultProps.name,
    checked = defaultProps.checked,
    disabled = defaultProps.disabled,
  } = props;

  const classList: ClassListType = Object.values(styles).reduce((acc: ClassListType, name) => {
    acc[name] = true;
    return acc;
  }, {});

  return (
    <label className={getClassName('ui-ctl ui-ctl-checkbox', classList)}>
      <input
        className="ui-ctl-element"
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e)}
      />
      <div className="ui-ctl-label-text">{children}</div>
    </label>
  );
}
