import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {

    it("Render without crashing", () => {
        shallow(<Game />);
    });

    it("Can start a new game", () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1, 2, 3, 4],
            feedback: 'Awesome',
            correctAnswer: -1 
        })
        wrapper.instance().newGame();
        expect(wrapper.state('guesses')).toEqual([])
        expect(wrapper.state('feedback')).toEqual('Make your guess!')
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });
    
    it("Cans make guess", () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        });
        
        wrapper.instance().guess(10);
        expect(wrapper.state('guesses')).toEqual([10]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
        
        wrapper.instance().guess(65);
        expect(wrapper.state('guesses')).toEqual([10, 65]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
        
        wrapper.instance().guess(75);
        expect(wrapper.state('guesses')).toEqual([10, 65, 75]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');
        
        wrapper.instance().guess(99);
        expect(wrapper.state('guesses')).toEqual([10, 65, 75, 99]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
        
        wrapper.instance().guess(100);
        expect(wrapper.state('guesses')).toEqual([10, 65, 75, 99, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });
});