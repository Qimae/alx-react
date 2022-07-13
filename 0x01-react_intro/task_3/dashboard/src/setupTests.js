import { configure } from 'enzyme';
import Adapter from '@zarcontrol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });
