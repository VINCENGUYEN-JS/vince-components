type APIProps = {
  property: string;
  description: string;
  type: string;
  default: string;
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

export { buttonAPI, cardAPI, dividerAPI, tagAPI, resultAPI, spaceAPI };
