import { action } from '@storybook/addon-actions';
import BxButton, { defaultProps, propsList as props } from '../ui/BxButton';

export default {
  title: 'BxButton',
  component: BxButton,
  args: {
    default: 'BxButton',
    click: action('click'),
    'toggle-menu': action('toggle-menu'),
    type: defaultProps.type,
    color: defaultProps.color,
    size: defaultProps.size,
    icon: defaultProps.icon,
    loader: defaultProps.loader,
    count: defaultProps.count,
    counter: defaultProps.counter,
    disabled: defaultProps.disabled,
    dropdown: defaultProps.dropdown,
    round: defaultProps.round,
    noCaps: defaultProps.noCaps,
    menu: defaultProps.menu,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    type: {
      options: props.types,
      defaultValue: defaultProps.type,
      control: { type: 'inline-radio' },
    },
    color: {
      options: props.colors,
      defaultValue: defaultProps.color,
      control: { type: 'select' },
    },
    size: {
      options: props.sizes,
      defaultValue: defaultProps.size,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: props.icons,
      defaultValue: defaultProps.icon,
      control: { type: 'select' },
    },
    loader: {
      options: props.loaders,
      defaultValue: defaultProps.loader,
      control: { type: 'inline-radio' },
    },
    count: {
      defaultValue: defaultProps.count,
      control: { type: 'number' },
    },
    counter: {
      defaultValue: defaultProps.counter,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
    },
    dropdown: {
      defaultValue: defaultProps.dropdown,
      control: { type: 'boolean' },
    },
    round: {
      defaultValue: defaultProps.round,
      control: { type: 'boolean' },
    },
    noCaps: {
      defaultValue: defaultProps.noCaps,
      control: { type: 'boolean' },
    },
    menu: {
      defaultValue: defaultProps.menu,
      control: { type: 'boolean' },
    },
  },
};

const Template = (args: any) => <BxButton {...args}>BxButton</BxButton>;

export const Default = Template.bind({});

// const Story = (propName, propList) => ({
//   render: (args) => ({
//     template: `
//       <div v-for="item in propList" :key="item" class="component">
//         <bx-button v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-button>
//       </div>
//     `,
//     data: () => ({ args, propName, propList }),
//     provide: {
//       $BX24: null,
//     },
//     components: { BxButton },
//   }),
//   argTypes: {
//     [propName]: {
//       table: {
//         disable: true,
//       },
//     },
//   },
// });

// export const Colors = Story('color', props.colors);
// export const Sizes = Story('size', props.sizes);
// export const Icons = Story('icon', props.icons);
// export const Loaders = Story('loader', props.loaders);
