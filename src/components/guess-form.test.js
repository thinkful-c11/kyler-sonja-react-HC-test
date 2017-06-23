import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

    it("Render without crashing", () => {
        shallow(<GuessForm />);
    });
     
    it('Fire the callback when submitting the form', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        wrapper.find('input[type="text"]').node.value = "50";
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith("50");
    });
});