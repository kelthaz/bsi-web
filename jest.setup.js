// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

const spyScrollTo = jest.fn();
Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/link', () => ({ children: Link }) => Link);
