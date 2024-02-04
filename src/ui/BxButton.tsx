import { loadStyles } from '../utils/loadStyles';

loadStyles();

export const propsList = {
  types: ['button', 'submit', 'reset'],
  colors: [
    'default',
    'success',
    'success-light',
    'danger',
    'danger-dark',
    'danger-light',
    'primary',
    'primary-dark',
    'secondary',
    'link',
    'light',
    'light-border',
  ],
  sizes: ['xs', 'sm', 'md', 'lg'],
  icons: [
    '',
    'add',
    'stop',
    'start',
    'pause',
    'setting',
    'task',
    'info',
    'search',
    'follow',
    'unfollow',
    'print',
    'add-folder',
    'list',
    'business',
    'business-confirm',
    'business-warning',
    'camera',
    'phone-up',
    'phone-down',
    'back',
    'edit',
    'share',
    'remove',
    'download',
    'cloud',
    'page',
    'chat',
    'phone-call',
    'lock',
    'done',
    'disk',
    'mail',
    'alert',
    'angle-up',
    'angle-down',
    'dots',
    'forward',
    'fail',
    'success',
    'plan',
    'eye-opened',
    'eye-closed',
    'tariff',
    'battery',
    'no-battery',
    'half-battery',
    'low-battery',
    'crit-battery',
    'demo',
  ],
  loaders: ['', 'clock', 'wait'],
};

export const defaultProps = {
  type: 'button',
  color: 'default',
  size: 'md',
  icon: '',
  loader: '',
  count: 0,
  counter: false,
  disabled: false,
  dropdown: false,
  round: false,
  noCaps: false,
  menu: false,
  onClick: () => null,
  onToggleMenu: () => null,
};

export default function BxButton(initProps: any) {
  const props = {
    ...defaultProps,
    ...initProps,
  };

  function getClassName(initClass: string) {
    const classList = {
      [`ui-btn-${props.color}`]: propsList.colors.includes(props.color),
      [`ui-btn-${props.size}`]: propsList.sizes.includes(props.size),
      [`ui-btn-icon-${props.icon}`]: props.icon && propsList.icons.includes(props.icon),
      [`ui-btn-${props.loader}`]: props.loader && propsList.loaders.includes(props.loader),
      'ui-btn-disabled': props.disabled,
      'ui-btn-dropdown': props.dropdown,
      'ui-btn-round': props.round,
      'ui-btn-no-caps': props.noCaps,
    };
    return Object.entries(classList)
      .reduce(
        (acc, [name, isName]) => {
          if (isName) acc.push(name);
          return acc;
        },
        [initClass],
      )
      .join(' ');
  }

  const counter = props.counter ? <i className="ui-btn-counter">{props.count}</i> : '';
  const button = (
    <button
      className={getClassName('ui-btn')}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {initProps.children}
      {counter}
    </button>
  );

  const buttonMenu = (
    <div className={getClassName('ui-btn-split')}>
      <button
        className="ui-btn-main"
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {initProps.children}
        {counter}
      </button>
      <button
        className="ui-btn-menu"
        type="button"
        disabled={props.disabled}
        onClick={props.onToggleMenu}
      />
    </div>
  );

  return props.menu ? buttonMenu : button;
}
