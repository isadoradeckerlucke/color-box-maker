import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react'
import BoxList from './BoxList'

// add sample data
function addBox(boxList, height = '2', width = '2', color = 'peachpuff') {
    const heightInput = boxList.getByLabelText('Height');
    const widthInput = boxList.getbyLabelText('Width');
    const backgroundInput = boxList.getbyLabelText('Background Color');
    fireEvent.change(backgroundInput, {target: {value: color}});
    fireEvent.change(widthInput, {target: {value: width}});
    fireEvent.change(heightInput, {target: {value: height}});
    const button = boxList.getByText('add a new box');
    fireEvent.click(button);
}

it('renders without crashing', function() {
    render(<BoxList />)
})

it('matches snapshot', function() {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

it('can add a new box', function(){
    const boxList = render(<BoxList />)

    // expect there are no boxes yet and so the button to remove boxes is not in the doc. 
    expect(boxList.queryByText('remove the box')).not.toBeInTheDocument()

    // add sample data
    addBox(boxList)

    // expect a box to be there
    const removeButton = boxList.getByText('remove the box');
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 2em;
        height: 2em;
        background-color: peachpuff;
    `)

    // expect form to have been cleared
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3)
})

it('can remove a box', function(){
    const boxList = render(<BoxList />)
    addBox(boxList)

    const removeButton = boxList.getByText('remove the box');

    // click remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument()
})