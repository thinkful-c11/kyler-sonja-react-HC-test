import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<Info Modal />', () => {

    it("Render without crashing", () => {
        shallow(<InfoModal />);
    });

});