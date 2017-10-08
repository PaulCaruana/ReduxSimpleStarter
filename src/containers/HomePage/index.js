import React, { Component } from 'react';
import { Form, Components } from 'components';
import { TextInput, Checkbox, Switch, Select, RadioGroup, Radio } from 'components/index2';
import { Conditional } from 'react-formwork';

class HomePage extends Component {
    render() {
        //const { TextInput, Checkbox } = FormComponents;
        const { Toggle } = Components(Conditional);
        const items = [
            {
                value: 'phone',
                label: 'Phone'
            },
            {
                value: 'email',
                label: 'Email'
            }
        ];
        const styles = {
            radioButton: {
                marginTop: 16,
            },
        };
        return (
            <Form name="home">
                <Toggle
                    name="postalAddress2"
                    label="Is your postal different than address as well?"
                    labelStyle={{ width: 'auto', marginRight: 16 }}
                    onToggle={props => (event, checked) => {
                        props.onChange(event, null, checked);
                    }}
                />
                <TextInput
                    name="suburb"
                    placeholder="Suburb"
                    label="Suburb"
                />
                <RadioGroup name="salutation" required >
                    <Radio value="mr" label="Mr" />
                    <Radio value="mrs" label="Mrs" />
                    <Radio value="ms" label="Ms" />
                </RadioGroup>
                <TextInput
                    name="name"
                    required
                    placeholder="Type your name here"
                    label="Name"
                />
                <Select required options={items} label="Contact method" name="contactMethod" />
                <TextInput
                    name="email"
                    required
                    email
                    placeholder="Type your email here"
                    label="E-mail"
                />
                <Switch
                    name="postalAddress"
                    label="Is your postal different than address?"
                />
                <Checkbox
                    name="over18"
                    label="Are you over 18 years old?"
                />
            </Form>
        );
    }
}

export default HomePage;