import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

describe('Footer', () => {
  it('should render the footer with correct content', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );


    const logo = screen.getByText('Rick & Morty');
    expect(logo).toBeTruthy();


    const tagline = screen.getByText('Wubba Lubba Dub Dub!');
    expect(tagline).toBeTruthy();


    const navTitle = screen.getByText('Quick Links');
    expect(navTitle).toBeTruthy();


    const homeLink = screen.getByText('Home');
    const charactersLink = screen.getByText('Characters');
    expect(homeLink).toBeTruthy();
    expect(charactersLink).toBeTruthy();

   
    const followUs = screen.getByText('Follow Us');
    const twitterLink = screen.getByText('Twitter');
    const facebookLink = screen.getByText('Facebook');
    const instagramLink = screen.getByText('Instagram');
    expect(followUs).toBeTruthy();
    expect(twitterLink).toBeTruthy();
    expect(facebookLink).toBeTruthy();
    expect(instagramLink).toBeTruthy();

    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(`© ${currentYear} Rick & Morty Fan App. All rights reserved.`);
    expect(copyright).toBeTruthy();
  });
});
