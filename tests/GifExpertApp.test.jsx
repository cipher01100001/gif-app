import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    const newCategory = 'Gravity Falls';

    test('should add new categories', () => {
        
        const { container } = render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: newCategory + '2' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: newCategory + '3' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
        expect(container).toMatchSnapshot();
    });

    test('Should not add a repeated category', () => {

        const { container } = render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
        expect(container).toMatchSnapshot();
    });

});