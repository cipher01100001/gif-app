import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {

    test('debe de regresar el estado inicial del hook', async () => {

        const { result } = renderHook(() => useFetchGifs('Gravity Falls'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

});