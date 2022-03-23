import * as React from 'react';
import { Split, Divider, Space } from '@vince-components';
import ComponentDoc from '../../template/ComponentDoc';
import { spaceAPI } from '../componentApi';

const FormGroup = ({
  children,
  label,
  htmlFor,
}: {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
}) => (
  <Space direction="vertical" size={0}>
    <label htmlFor={htmlFor}>{label}</label>
    {children}
  </Space>
);

const Form = () => (
  <Space direction="vertical" size={0}>
    <FormGroup htmlFor="firstName" label="First Name">
      <input type="text" id="firstName" />
    </FormGroup>
    <FormGroup htmlFor="lastName" label="Last Name">
      <input type="text" id="lastName" />
    </FormGroup>
    <FormGroup htmlFor="email" label="Email">
      <input type="text" id="email" />
    </FormGroup>
    <FormGroup htmlFor="address" label="Street Address">
      <input type="text" id="address" />
    </FormGroup>
    <FormGroup htmlFor="city" label="City">
      <input type="text" id="city" />
    </FormGroup>
    <FormGroup htmlFor="state" label="State">
      <input type="text" id="state" />
    </FormGroup>
    <FormGroup htmlFor="zipCode" label="Zip Code">
      <input type="text" id="zipCode" />
    </FormGroup>
  </Space>
);

const SplitExample = () => (
  <ComponentDoc
    title="Split"
    introduction="For the longest time, floats were the go-to tool for putting two things next to each other. Unfortunately, since this is not what floats were designed for, this created as many problems as it solved. Luckily, modern CSS makes this much easier to solve."
  >
    <Divider>Split 1/2 page</Divider>
    <Split fraction="1/2">
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  </ComponentDoc>
);

export default SplitExample;
