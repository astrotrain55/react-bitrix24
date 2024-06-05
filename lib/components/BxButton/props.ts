type PropType = 'button' | 'submit' | 'reset';

type PropSize = 'xs' | 'sm' | 'md' | 'lg';

type PropLoader = '' | 'clock' | 'wait';

type PropColor =
  | 'default'
  | 'success'
  | 'success-light'
  | 'danger'
  | 'danger-dark'
  | 'danger-light'
  | 'primary'
  | 'primary-dark'
  | 'secondary'
  | 'link'
  | 'light'
  | 'light-border';

type PropIcon =
  | ''
  | 'add'
  | 'stop'
  | 'start'
  | 'pause'
  | 'setting'
  | 'task'
  | 'info'
  | 'search'
  | 'follow'
  | 'unfollow'
  | 'print'
  | 'add-folder'
  | 'list'
  | 'business'
  | 'business-confirm'
  | 'business-warning'
  | 'camera'
  | 'phone-up'
  | 'phone-down'
  | 'back'
  | 'edit'
  | 'share'
  | 'remove'
  | 'download'
  | 'cloud'
  | 'page'
  | 'chat'
  | 'phone-call'
  | 'lock'
  | 'done'
  | 'disk'
  | 'mail'
  | 'alert'
  | 'angle-up'
  | 'angle-down'
  | 'dots'
  | 'forward'
  | 'fail'
  | 'success'
  | 'plan'
  | 'eye-opened'
  | 'eye-closed'
  | 'tariff'
  | 'battery'
  | 'no-battery'
  | 'half-battery'
  | 'low-battery'
  | 'crit-battery'
  | 'demo';

type TypesProps = {
  types: PropType[];
  colors: PropColor[];
  sizes: PropSize[];
  icons: PropIcon[];
  loaders: PropLoader[];
};

export type Props = {
  children: string;
  type: PropType;
  color: PropColor;
  size: PropSize;
  icon: PropIcon;
  loader: PropLoader;
  count: number;
  counter: boolean;
  disabled: boolean;
  dropdown: boolean;
  round: boolean;
  noCaps: boolean;
  menu: boolean;
  onClick: Function;
  onToggleMenu: Function;
};

export const defaultProps: Omit<Props, 'children' | 'onClick' | 'onToggleMenu'> = {
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
};

export const propsValues: TypesProps = {
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
