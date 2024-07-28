import {render, screen} from '@testing-library/react'
import Home from '../../src/pages/index';
import '@testing-library/jest-dom'

describe('HomePage', () => {
    beforeAll(() => {
        render(<Home />);
    });

    test('should display t.TITLE', () => {
        expect(screen.getByTestId('hello-world').innerHTML).toBe('TITLE');
    });
});