import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas en <RealExampleRef/>',()=>{
   test('debe mostrarse correctamente',()=>{
      const wrapper = shallow(<RealExampleRef/>);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
   })
   test('debe mostrarse el componente <MultipleHooks/>',()=>{
      const wrapper = shallow(<RealExampleRef/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
   })
})