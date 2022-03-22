type APIProps = {
  property: string;
  description: string;
  type: string;
  default: string;
  title?: string;
};

const orderAPI = (api: APIProps[]): APIProps[] => {
  return api.sort((a, b) => a.property.localeCompare(b.property));
};

const buttonAPI: APIProps[] = orderAPI([
  {
    property: 'type',
    description: 'Can be set to primary dashed',
    type: 'primary | dashed',
    default: 'default',
  },
  {
    property: 'size',
    description: 'Can be set size of button',
    type: 'large | medium | small',
    default: 'default',
  },
  {
    property: 'shape',
    description: 'Can be set button shape',
    type: 'default | circle | round',
    default: 'default',
  },
]);

const cardAPI: APIProps[] = orderAPI([
  {
    property: 'title',
    description: 'Card title',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'extra',
    description: 'Content to render in the top-right corner of the card',
    type: 'ReactNode',
    default: '-',
  },
]);

const dividerAPI: APIProps[] = orderAPI([
  {
    property: 'children',
    description: 'The wrapped title',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'orientation',
    description: 'The position of title inside divider',
    type: 'left | right | center',
    default: 'center',
  },
]);

const tagAPI: APIProps[] = orderAPI([
  {
    property: 'children',
    description: 'Title of Tag',
    type: 'ReactNode',
    default: '-',
  },
]);

const resultAPI: APIProps[] = orderAPI([
  {
    property: 'title',
    description: 'Title of Result',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'status',
    description: 'Result status, decide icons and colors',
    type: 'success | error | warning | default',
    default: 'info',
  },
]);

const spaceAPI: APIProps[] = orderAPI([
  {
    title: 'Space',
    property: 'direction',
    description: 'The space direction',
    type: 'horizontal | vertical',
    default: 'horizontal',
  },
  {
    property: 'align',
    description: 'The space align',
    type: 'start | end | center |baseline',
    default: 'center',
  },
  {
    property: 'size',
    description: 'The space size',
    type: 'small | middle | large | number',
    default: 'small',
  },
]);

const gridAPI: APIProps[][] = [
  [
    {
      title: 'Row',
      property: 'gutter',
      description: 'Space between grids',
      type: 'number | object | array',
      default: '0',
    },
    {
      property: 'justify',
      description: 'Horizontal arrangement',
      type: 'start | end | center | space-around | space-between',
      default: 'start',
    },
  ],
  [
    {
      title: 'Col',
      property: 'span',
      description: 'number of cells to occupy',
      type: 'number',
      default: 'none',
    },
    {
      property: 'offset',
      description: 'The number of cells to offset Col from the left',
      type: 'number',
      default: '0',
    },
  ],
];

const inputAPI: APIProps[][] = [
  [
    {
      title: 'Input',
      property: 'placeholder',
      description: 'placeholder of input',
      type: 'string',
      default: '-',
    },
    {
      property: 'addonAfter',
      description: 'The label text displayed after the input field',
      type: 'ReactNode',
      default: '-',
    },
    {
      property: 'addonBefore',
      description: 'The label text displayed before the input field',
      type: 'ReactNode',
      default: '-',
    },
    {
      property: 'onChange',
      description: 'Callback when user input',
      type: 'function(value,event)',
      default: '-',
    },
    {
      property: 'onPressEnter',
      description: 'Callback when user Enter key is pressed',
      type: 'function(value,event)',
      default: '-',
    },
  ],
  [
    {
      title: 'Input.Search',
      property: 'onSearch',
      description:
        'The callback fn triggered when you click on the search-icon,or press the Enter key',
      type: 'function(value,event)',
      default: '-',
    },
  ],
];

const menuAPI: APIProps[][] = [
  [
    {
      title: 'Menu',
      property: 'defaultSelectedKeys',
      description: 'The default selected keys',
      type: 'string[]',
      default: '-',
    },
    {
      property: 'mode',
      description: 'Type of menu',
      type: 'horizontal | vertical | inline',
      default: 'verical',
    },
  ],
  [
    {
      title: 'Menu.Item',
      property: 'key',
      description: 'Unique ID of menu item',
      type: 'string',
      default: '-',
    },
  ],
  [
    {
      title: 'Menu.ItemGroup',
      property: 'title',
      description: 'The title of the group',
      type: 'React Node',
      default: '-',
    },
  ],
  [
    {
      title: 'Menu.SubMenu',
      property: 'title',
      description: 'Title of sub menu',
      type: 'React Node',
      default: '-',
    },
    {
      property: 'children',
      description: 'Sub menu items',
      type: 'Array<MenuItem | SubMenu>',
      default: '-',
    },
    {
      property: 'key',
      description: 'Unique ID of the sub-menu',
      type: 'string',
      default: '-',
    },
  ],
];

const modalAPI: APIProps[] = orderAPI([
  {
    title: 'Modal',
    property: 'closable',
    description: 'Whether to show the close button',
    type: 'boolean',
    default: 'true',
  },
  {
    property: 'footer',
    description: 'Set as null when you dont need default button',
    type: 'ReactNode',
    default: 'OK and Cancel Btn',
  },
  {
    property: 'title',
    description: 'The title of modal',
    type: 'ReactNode',
    default: '-',
  },
  {
    property: 'width',
    description: 'Width of the modal dialog',
    type: 'number',
    default: '520',
  },
]);

const layoutAPI: APIProps[][] = [
  [
    {
      title: 'Layout',
      property: 'hasSider',
      description: 'Whether to display the side bar',
      type: 'boolean',
      default: 'false',
    },
  ],
  [
    {
      title: 'Layout.Sider',
      property: 'width',
      description: 'Width of the sidebar',
      type: 'number | string',
      default: '200',
    },
  ],
];

export {
  buttonAPI,
  cardAPI,
  dividerAPI,
  tagAPI,
  resultAPI,
  spaceAPI,
  gridAPI,
  menuAPI,
  modalAPI,
  inputAPI,
  layoutAPI,
};
