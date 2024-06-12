import { Args, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { BxAlert } from '../../lib';
import { defaultProps, propsValues, type TypesPropsList } from '../../lib/components/BxAlert';

const meta: Meta<typeof BxAlert> = {
  title: 'BxAlert',
  args: {
    children: '',
    onClose: fn(),
    title: defaultProps.title,
    size: defaultProps.size,
    color: defaultProps.color,
    icon: defaultProps.icon,
    center: defaultProps.center,
    inline: defaultProps.inline,
    closing: defaultProps.closing,
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      control: { type: 'inline-radio' },
    },
    center: {
      control: { type: 'boolean' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    closing: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template = ({ children, ...args }: Args) => <BxAlert {...args}>{children}</BxAlert>;

export const Default = Template.bind({});

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

export const Sizes = Story('size', propsValues.sizes);
export const Colors = Story('color', propsValues.colors);
export const Icons = Story('icon', propsValues.icons);
