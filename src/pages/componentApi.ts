type APIProps = {
  property: string;
  description: string;
  type: string;
  default: string;
  title?: string;
};

const buttonAPI: APIProps[] = [
  {
    property: "type",
    description: "Can be set to primary dashed",
    type: "primary | dashed",
    default: "default",
  },
  {
    property: "size",
    description: "Can be set size of button",
    type: "large | medium | small",
    default: "default",
  },
  {
    property: "shape",
    description: "Can be set button shape",
    type: "default | circle | round",
    default: "default",
  },
];

const cardAPI: APIProps[] = [
  {
    property: "title",
    description: "Card title",
    type: "ReactNode",
    default: "-",
  },
  {
    property: "extra",
    description: "Content to render in the top-right corner of the card",
    type: "ReactNode",
    default: "-",
  },
];

const dividerAPI: APIProps[] = [
  {
    property: "children",
    description: "The wrapped title",
    type: "ReactNode",
    default: "-",
  },
  {
    property: "orientation",
    description: "The position of title inside divider",
    type: "left | right | center",
    default: "center",
  },
];

const tagAPI: APIProps[] = [
  {
    property: "children",
    description: "Title of Tag",
    type: "ReactNode",
    default: "-",
  },
];

const resultAPI: APIProps[] = [
  {
    property: "title",
    description: "Title of Result",
    type: "ReactNode",
    default: "-",
  },
  {
    property: "status",
    description: "Result status, decide icons and colors",
    type: "success | error | warning | default",
    default: "info",
  },
];

const spaceAPI: APIProps[] = [
  {
    property: "direction",
    description: "The space direction",
    type: "horizontal | vertical",
    default: "horizontal",
  },
];

const gridAPI: APIProps[][] = [
  [
    {
      title: "Row",
      property: "gutter",
      description: "Space between grids",
      type: "number | object | array",
      default: "0",
    },
  ],
  [
    {
      title: "Col",
      property: "span",
      description: "number of cells to occupy",
      type: "number",
      default: "none",
    },
  ],
];

const inputAPI: APIProps[][] = [
  [
    {
      title: "Input",
      property: "placeholder",
      description: "placeholder of input",
      type: "string",
      default: "-",
    },
  ],
  [
    {
      title: "Input.Search",
      property: "onSearch",
      description:
        "The callback fn triggered when you clock on the search-icon,or press the Enter key",
      type: "function(value,event)",
      default: "-",
    },
  ],
];

const menuAPI: APIProps[][] = [
  [
    {
      title: "Menu",
      property: "defaultSelectedKeys",
      description: "The default selected keys",
      type: "string[]",
      default: "-",
    },
    {
      property: "mode",
      description: "Type of menu",
      type: "horizontal | vertical | inline",
      default: "verical",
    },
  ],
  [
    {
      title: "Menu.Item",
      property: "key",
      description: "Unique ID of menu item",
      type: "string",
      default: "-",
    },
  ],
  [
    {
      title: "Menu.ItemGroup",
      property: "title",
      description: "The title of the group",
      type: "React Node",
      default: "-",
    },
  ],
  [
    {
      title: "Menu.SubMenu",
      property: "icon",
      description: "Icon of sub menu",
      type: "React Node",
      default: "-",
    },
    {
      property: "children",
      description: "Sub menu items",
      type: "Array<MenuItem | SubMenu>",
      default: "-",
    },
  ],
];

const layoutAPI: APIProps[][] = [
  [
    {
      title: "Layout",
      property: "hasSider",
      description: "Whether to display the side bar",
      type: "boolean",
      default: "false",
    },
  ],
  [
    {
      title: "Layout.Sider",
      property: "width",
      description: "Width of the sidebar",
      type: "number | string",
      default: "200",
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
  inputAPI,
  layoutAPI,
};
