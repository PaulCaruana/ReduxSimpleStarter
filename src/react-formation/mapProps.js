import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function mapProps(props, mapper, customProperties, field) {
    return ComposedComponent => {
        const rootProps = ['accept',
            'alt',
            'autoComplete',
            'autoFocus',
            'capture',
            'checked',
            'crossOrigin',
            'disabled',
            'form',
            'formAction',
            'formEncType',
            'formMethod',
            'formNoValidate',
            'formTarget',
            'height',
            'list',
            'max',
            'maxLength',
            'min',
            'minLength',
            'multiple',
            'name',
            'pattern',
            'placeholder',
            'readOnly',
            'required',
            'size',
            'src',
            'step',
            'type',
            'value',
            'width',
            'onChange'];
        const mappedProps = Object.keys(mapper).reduce((acc, propName) => {
            const mapValue = mapper[propName];
            const propValue = (typeof mapValue === 'function') ? mapValue(props, field) : mapValue;
            return { ...acc, [propName]: propValue };
        }, {});
        const allProps = { ...props, ...mappedProps };
        if (mappedProps.children) {
            allProps.children = mappedProps.children;
        }
        const componentPropNames = Object.keys(ComposedComponent.propTypes) || [];
        const mappedPropNames = Object.keys(mappedProps) || [];
        const validPropNames = componentPropNames.concat(mappedPropNames).concat(rootProps);
        const componentProps = {};
        Object.keys(allProps).forEach(name => {
            if (validPropNames.indexOf(name) > -1
                && customProperties.indexOf(name) === -1
            ) {
                componentProps[name] = allProps[name];
            }
        });
        return componentProps;
    };
};