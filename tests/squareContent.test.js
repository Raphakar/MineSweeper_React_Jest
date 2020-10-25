
import React from 'react';
import renderer from 'react-test-renderer';
import SquareContent from '../components/SquareContent.js';

test('On Right Click turn Square Disabled', () => {
    const component = renderer.create(
        <SquareContent number={4} isBomb={false} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onChangeState();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});