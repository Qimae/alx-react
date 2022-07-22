import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Testing <Footer /> Component', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Footer />);
    });
  
    it("Renders with out crashing", () => {
      expect(wrapper).toBeDefined();
    });
  
    it("Renders at the very least the text “Copyright”", () => {
        expect(wrapper.find("Copyright").at(0)).toBeDefined();
      });
  });