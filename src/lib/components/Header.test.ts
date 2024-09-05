import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header.svelte', async () => {
    it('Renders', async () => {
        render(Header);
        screen.getByText('My Household');
    });
});