import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<Guess List />', () => {

    it("Render without crashing", () => {
        shallow(<GuessList guesses={[1, 2, 3]}/>);
    });

    it("Renders an unordered list", () => {
        const wrapper = shallow(<GuessList guesses={[1, 2, 3]}/>);
        expect(wrapper.find('#guessList').length).toEqual(1);
    });
    
    it("Renders all the correct props", () => {
        const myProps = [1, 2, 3];
        const wrapper = shallow(<GuessList guesses={myProps}/>);
        for (let i = 0; i < 3; i++) { 
            expect(wrapper.find('li').nodes[i].props.children).toEqual(myProps[i])
        }
        
    });
});