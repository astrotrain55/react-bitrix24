import { Args, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { BxButton } from '../../lib';
import { defaultProps, propsValues, type TypesPropsList } from '../../lib/components/BxButton';

const meta: Meta<typeof BxButton> = {
  title: 'BxButton',
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
  args: {
    children: 'BxButton',
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
    children: {
      control: { type: 'text' },
    },
    type: {
      options: propsValues.types,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      control: { type: 'select' },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      control: { type: 'select' },
    },
    loader: {
      options: propsValues.loaders,
      control: { type: 'inline-radio' },
    },
    count: {
      control: { type: 'number' },
    },
    counter: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    dropdown: {
      control: { type: 'boolean' },
    },
    round: {
      control: { type: 'boolean' },
    },
    noCaps: {
      control: { type: 'boolean' },
    },
    menu: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template = ({ children, ...args }: Args) => <BxButton {...args}>{children}</BxButton>;

const Story = (propName: string, propList: TypesPropsList[]) => ({
  render(args: Args) {
    const component = (dynamicProp: Record<string, TypesPropsList>, key: number) => (
      <div className="component" key={key}>
        {Template({ ...args, ...dynamicProp })}
      </div>
    );

    return propList
      .map((value) => ({ [propName]: value }))
      .map((prop, key) => component(prop, key));
  },
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Default = Template.bind({});
export const Colors = Story('color', propsValues.colors);
export const Sizes = Story('size', propsValues.sizes);
export const Icons = Story('icon', propsValues.icons);
export const Loaders = Story('loader', propsValues.loaders);
