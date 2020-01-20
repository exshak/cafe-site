<p align="center">
  <a href="https://cafelina.netlify.com">
    <img src="./src/assets/icons/logo.svg" alt="Cafelina" width="300" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/exshak/cafe-site">
    <img src="https://img.shields.io/badge/build-passing-success.svg" alt="build: status" />
  </a>
  <a href="https://getbootstrap.com">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20bootstrap-orange.svg?colorB=daa357&colorA=db748e" alt="style: bootstrap" />
  </a>
  <a href="https://contentful.com">
    <img src="https://img.shields.io/badge/cms-contentful-00bbcc.svg" alt="cms: contentful" />
  </a>
  <a href="https://cypress.io">
    <img src="https://img.shields.io/badge/tests-cypress-00cc99.svg" alt="tests: cypress" />
  </a>
  <a href="https://app.netlify.com/sites/cafelina/deploys">
    <img src="https://api.netlify.com/api/v1/badges/71c43047-2d8e-4fc3-9bee-ff1bc9b2986a/deploy-status" alt="netlify: status" />
  </a>
</p>

---

Cafelina is a Coffee Shop and Bakery website that displays menus and products from Contentful's CMS API using Gatsby and GraphQL. It provides a clean Coffee Shop experience through Bootstrap responsive design and order processing with the Snipcart checkout API.

_Have a great idea to contribute? Make a pull request, I'm always looking for ways to improve [Cafelina](https://cafelina.netlify.com)._

## Features

- Carousel & Gallery
- Contentful CMS
- Formspree & reCAPTCHA
- Google Maps React
- Snipcart API
- Netlify CD
- PWA
- SEO

## Quick Start

Clone repository, install dependencies, start server

```sh
git clone https://github.com/exshak/cafe-site.git
cd cafe-site
yarn               # npm install
yarn start         # npm start
# to deploy
yarn build         # npm build
```

Visit site at _`localhost:8000`_

## Built With

- [React](https://reactjs.org)
- [Gatsby](https://gatsbyjs.org)
- [Bootstrap](https://getbootstrap.com)
- [Contentful](https://contentful.com)
- [Cypress](https://cypress.io)
- [Netlify](https://netlify.com)

#### Folder Structure

```sh
config            # SEO manifest
src/
├── assets        # Icons and images
├── components    # Javascript and css
├── pages         # Site pages and routes
└── templates     # Product menu templates
```

## License

[MIT](./LICENSE)
