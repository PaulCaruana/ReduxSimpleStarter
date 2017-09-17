import React, { Component } from 'react';
import { Form, TextInput, Select, Option, Toggle, Checkbox, RadioGroup, Radio, Switch } from 'components';


class HomePage extends Component {
    render() {
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