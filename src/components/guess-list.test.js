import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<Guess List />', () => {

    it("Render without crashing", () => {
        shallow(<GuessList guesses={[1, 2, 3]}/>);
    });

    it("Renders an unordered list", () => {
        const wrapper = shallow(<GuessList guesses={[1, 2, 3]}/>);
        console.log(wrapper.node);
        expect(wrapper.find('#guessList').length).toEqual(1); //.to.have.length(1);
    });

});