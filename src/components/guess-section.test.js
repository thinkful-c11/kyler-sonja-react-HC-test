import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';
import GuessForm from './guess-form';

describe('<GuessSection/>', () => {

    it("Render without crashing", () => {
        shallow(<GuessSection />);
    });
    
    it('Renders expected stuff', () => {
        const myProps = "Hot";
        const onGuess = jest.fn();
        const wrapper = shallow(<GuessSection feedback={myProps} onGuess={onGuess}/>);
        expect(wrapper.contains(<h2 id="feedback">{myProps}</h2>)).toEqual(true);
        expect(wrapper.contains(<GuessForm  onGuess={onGuess} />)).toEqual(true);
    });
});