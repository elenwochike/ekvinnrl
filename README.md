# Ekvinn Resources — React app

A React + Vite rebuild of the Ekvinn Resources site: blueprint/technical-drawing theme,
five routed pages (Home, About, Services, Portfolio, Contact), and the scroll-driven
measuring-tape reveal on the home page. Dark theme only, set in Raleway, branded with
your logo files.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

The app uses `HashRouter` (URLs look like `#/about`), so the built `dist/` folder can be
dropped onto **any** static host — Netlify, Vercel, GitHub Pages, S3, or just opened from
disk — with zero server configuration. If you'd rather have clean URLs (`/about` instead
of `#/about`), swap `HashRouter` for `BrowserRouter` in `src/main.jsx` and configure your
host to redirect all paths to `index.html`.

## Structure

```
src/
  components/   Header, Marquee, Footer, TapeWidget, ProjectCard
  pages/        Home, About, Services, Portfolio, Contact
  data/         projects.js — the portfolio dataset used by Home + Portfolio
  config.js     CONTACT_EMAIL — the inbox contact-form submissions go to
  styles.css    the whole design system (tokens, layout, tape widget, etc.)
public/
  logo-full.png   your wordmark + "Resources limited" lockup (used in the nav & favicon-adjacent spots)
  logo-mark.png   your standalone mark (used as favicon, tape-case badge, and footer mark)
```

## About the contact form

This is a static, backend-free app, so it can't silently send email on its own — there's
nowhere for the message to go without a server. **Submitting the form opens the visitor's
own email app** with the brief pre-filled and addressed to the address in
`src/config.js` (currently `chikedsgnr@gmail.com` — I assumed `.com` since the address you
gave was missing it; please double-check that's right).

If you'd rather have submissions delivered silently in the background (no email client
popup), the form is a single function (`handleSubmit` in `src/pages/Contact.jsx`) —
point it at a form backend such as [Formspree](https://formspree.io) or
[EmailJS](https://www.emailjs.com/) instead of the `mailto:` link, using your own account's
endpoint/API key. Happy to wire that up if you set up an account and share the
endpoint/key.

## Logos

Both logo files are already transparent PNGs designed for a dark background (white ink),
which is why they only work now that the theme is dark-only. If you get vector (SVG) or
higher-resolution versions later, drop them into `public/` with the same filenames to
upgrade quality without touching any code.
