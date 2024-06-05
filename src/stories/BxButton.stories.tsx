import { fn } from '@storybook/test';
import { BxButton, defaultProps, propsValues, type Props } from '../../lib/components/BxButton';

export default {
  title: 'BxButton',
  component: BxButton,
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
  args: {
    default: 'BxButton',
    onClick: fn(),
    onToggleMenu: fn(),
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
      options: propsValues.types,
      defaultValue: defaultProps.type,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      defaultValue: defaultProps.color,
      control: { type: 'select' },
    },
    size: {
      options: propsValues.sizes,
      defaultValue: defaultProps.size,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      defaultValue: defaultProps.icon,
      control: { type: 'select' },
    },
    loader: {
      options: propsValues.loaders,
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

const Template = (args: Props) => <BxButton {...args}>BxButton</BxButton>;

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

// export const Colors = Story('color', propsValues.colors);
// export const Sizes = Story('size', propsValues.sizes);
// export const Icons = Story('icon', propsValues.icons);
// export const Loaders = Story('loader', propsValues.loaders);
