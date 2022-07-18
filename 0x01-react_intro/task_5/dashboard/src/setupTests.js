import { configure } from 'enzyme';
import Adapter from '@wojtechmaj/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });
