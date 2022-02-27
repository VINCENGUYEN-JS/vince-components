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

export { buttonAPI };
