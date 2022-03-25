import * as React from 'react';
import { Column, Columns, Split, Divider, Space } from '@vince-components';
import ComponentDoc from '../../template/ComponentDoc';
import { columnsAPI } from '../componentApi';

const columnsCode = `<Split fraction="1/2">
<Columns columns={6}>
    <Column span={3}>
        <FormGroup htmlFor="firstName" label="First Name">
            <input type="text" id="firstName" />
        </FormGroup>
    </Column>
    <Column span={3}>
        <FormGroup htmlFor="lastName" label="Last Name">
            <input type="text" id="lastName" />
        </FormGroup>
    </Column>
    <Column span={4}>
        <FormGroup htmlFor="email" label="Email">
            <input type="text" id="email" />
        </FormGroup>
    </Column>
    <Column span={6}>
        <FormGroup htmlFor="address" label="Street Address">
            <input type="text" id="address" />
        </FormGroup>
    </Column>
    <Column span={2}>
        <FormGroup htmlFor="city" label="City">
            <input type="text" id="city" />
        </FormGroup>
    </Column>
    <Column span={2}>
        <FormGroup htmlFor="state" label="State">
            <input type="text" id="state" />
        </FormGroup>
    </Column>
    <Column span={2}>
        <FormGroup htmlFor="zipCode" label="Zip Code">
            <input type="text" id="zipCode" />
        </FormGroup>
    </Column>
</Columns> `;

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
  <Columns columns={6}>
    <Column span={3}>
      <FormGroup htmlFor="firstName" label="First Name">
        <input type="text" id="firstName" />
      </FormGroup>
    </Column>
    <Column span={3}>
      <FormGroup htmlFor="lastName" label="Last Name">
        <input type="text" id="lastName" />
      </FormGroup>
    </Column>
    <Column span={4}>
      <FormGroup htmlFor="email" label="Email">
        <input type="text" id="email" />
      </FormGroup>
    </Column>
    <Column span={6}>
      <FormGroup htmlFor="address" label="Street Address">
        <input type="text" id="address" />
      </FormGroup>
    </Column>
    <Column span={2}>
      <FormGroup htmlFor="city" label="City">
        <input type="text" id="city" />
      </FormGroup>
    </Column>
    <Column span={2}>
      <FormGroup htmlFor="state" label="State">
        <input type="text" id="state" />
      </FormGroup>
    </Column>
    <Column span={2}>
      <FormGroup htmlFor="zipCode" label="Zip Code">
        <input type="text" id="zipCode" />
      </FormGroup>
    </Column>
  </Columns>
);

const ColumnsExample = () => (
  <ComponentDoc
    title="Columns (Grid v2)"
    introduction="Bootstrap and other CSS frameworks were revolutionary. They perfected the X column grid system to create layouts by doing a little math. Although we are (fortunately) no longer dependent on these X column grid systems as our universal layout, it is still a helpful way to lay out items. However, with the Columns primitive, we are no longer bound by 12- or 24-column systems. Instead, we can set five columns, or 13 columns, or any other number we need.."
    api={columnsAPI}
    code={columnsCode}
  >
    <Divider>Columns and Column </Divider>
    <Split fraction="1/2">
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  </ComponentDoc>
);

export default ColumnsExample;
