# Invoice Payment

A React application built with [React](https://reactjs.org/) and TypeScript. This app does making payment with invoices.

## Features

- Built with React
- Tailwind CSS
- Environment variable support
- API integration
- Fully typed

## Project Structure

```
invoice-payment-frontend-react/
├── .vscode/               # VSCode editor settings
├── node_modules/          # Project dependencies
├── public/                # Static files
├── src/                   # Source code
│   ├── container/         # Layout or view-specific components
│   ├── data/              # Mock data or static data files
│   ├── lib/               # Shared libraries/helpers
│   ├── pages/             # Route-based components
│   ├── utils/             # Utility functions
│   ├── App.css            # Global styles
│   ├── App.test.tsx       # Test file for App component
│   ├── App.tsx            # Root App component
│   ├── index.css          # Tailwind imports and base styles
│   ├── index.tsx          # Entry point of the React app
│   ├── logo.svg           # Project logo
│   ├── react-app-env.d.ts # Type definitions for environment variables
│   ├── reportWebVitals.ts # Performance reporting
│   └── setupTests.ts      # Test setup file
├── .env                   # Environment variables
├── .env.example           # Example env file
├── .gitignore             # Git ignored files list
├── LICENSE                # Project license
├── package-lock.json      # Lock file for npm
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Lightcomet53/invoice-payment-frontend-react.git
cd invoice-payment-frontend-react
```

### 2. Install dependencies

Using NPM:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 3. Configure environment variables

Create a `.env` file in the root directory by copying the example file:

```bash
cp .env.example .env
```

Example `.env`

```
REACT_APP_SERVER_URL=http://localhost:5000
```

## Runnin the App Locally

Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`

## Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

## Testing
If you're using testing libraries like Vitest or Jest, you can run:

```bash
npm run test
```

> Add tests in the `/tests` or `__tests__` directory and configure accordingly.

## Deployment

This app can be easily deployed using:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

For Vercel:

1. Push your repo to GitHub.
2. Connect the GitHub repo to Vercel.
3. Set your environment variables in Vercel dashboard.
4. Deploy!

## Notes

- Make sure all environment variables are prefixed with `REACT_APP_` to be exposed in the client.
- Restart the dev server after editing `.env`.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This project is licensed under the MIT License.

## Author

Made with by Wellington(https://github.com/your-username)
