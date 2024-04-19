import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => {

    const category = 'Gravity Falls';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar los items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: '1',
                title: 'Gravity Falls',
                url: 'https://local.com'
            },
            {
                id: '2',
                title: 'One Punch Man',
                url: 'https://onepunch.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);

    })

});

