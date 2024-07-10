# Shop APP (Task)

This is a React Native shopping application that allows users to view a list of products and see detailed information about each product. The application is built using Expo, TypeScript, and follows good practices in code structure and organization.

## Features

- **Product List Page**: Fetches and displays a list of products from a REST API.
- **Product Detail Page**: Displays detailed information about a selected product.
- **Navigation**: Uses React Navigation to navigate between the product list and product detail pages.
- **Styling**: Styled to match the appearance of the NBSoft website.
- **Responsive Design**: Ensures the app looks good on various screen sizes.
- **Testing**: Includes basic tests for the Product List and Product Detail screens.

## Project Structure

├── App.tsx
├── package.json
├── tsconfig.json
├── .gitignore
├── screens
│ ├── ProductListScreen.tsx
│ ├── ProductDetailScreen.tsx
├── components
│ ├── ProductCard.tsx
├── navigation
│ ├──AppNavigator.tsx
├── navigation.d.ts
├── types.ts
└── tests
├── ProductListScreen.test.tsx
├── ProductDetailScreen.test.tsx

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/shopping-app.git
    cd shopping-app
    ```

2. **Install dependencies**:

    npm install
    # or
    yarn install


3. **Start the Expo development server**:

    ```bash
    npm start
    ```

4. **Run tests**:

    ```bash
    npm test
    ```

## Usage

- **Product List Page**: Displays a list of products fetched from the [Makeup API](https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline). Clicking on a product navigates to the Product Detail Page.
- **Product Detail Page**: Displays detailed information about the selected product including its image, brand, name, and price.

## Troubleshooting

### Dependency Issues

If you encounter dependency issues, try installing dependencies with the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps


License

### Notes

- 'mk0vacev1c'


