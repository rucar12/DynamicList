# Shopping List Application

## Instructions to Run the Application

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/rucar12/DynamicList.git
   cd DynamicList
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the app.

### Build for Production

To build the application for production:

```bash
npm run build
```

The output will be in the `dist` folder.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Architectural and Design Decisions

### 1. State Management

- **Choice**: Context API
- **Reason**: The Context API is lightweight and built into React, making it suitable for small to medium-sized applications where the state is not overly complex. Using Context API allowed us to:
  - Avoid adding external dependencies like Redux, reducing the application’s bundle size.
  - Keep the codebase simple and easy to understand.
  - Centralize state management for the shopping list and provide reusable functionality for CRUD operations.

### 2. Styling

- **Choice**: CSS Modules with SCSS
- **Reason**: CSS Modules provide scoped styles, avoiding class name collisions and ensuring styles are maintainable. SCSS was used to:
  - Leverage variables, nesting for cleaner and more maintainable styles.
  - Enable customization while maintaining a structured and readable styling approach.
  - Avoid the boilerplate look that often comes with UI libraries.

### 3. Custom Components

- **Reason**: Instead of relying on pre-built components from libraries, custom components were developed to:
  - Demonstrate expertise in building reusable and flexible components.
  - Allow greater control over the functionality and design of the application.
  - Maintain consistency with the application's specific requirements and design language.

### 4. Routing

- **Choice**: `react-router-dom`
- **Reason**: It’s a well-supported and widely-used library for handling client-side routing in React applications. It was used to:
  - Manage navigation and allow for query parameter-based filtering.
  - Provide a robust solution for scalable routing needs.

### 5. Development Build Tool

- **Choice**: `Vite`
- **Reason**: Vite was chosen as the build tool and development server because of its superior performance and developer experience compared to traditional tools like Webpack or Create React App (CRA). Specifically:
  Vite was chosen as the build tool and development server because of its superior performance and developer experience compared to traditional tools like Webpack or Create React App (CRA). Specifically:
  - Vite's blazing-fast hot module replacement (HMR) ensures minimal delay during development, allowing for an efficient feedback loop.
  - Vite leverages ES modules in development and Rollup for production builds, resulting in optimized and fast production output.
  - Vite offers TypeScript integration without requiring additional configuration, reducing setup time.
  - Vite’s modern approach is designed to support native ESM and dynamic imports, aligning with current and future JavaScript standards.

## Possible Improvements

If given more time, the following features and improvements could be added:

1. **Product Enhancements**:

   - Add images for products to improve the user experience.
   - Include additional product details such as price, description, and ratings.

2. **Advanced Filtering**:

   - Enhance the filtering functionality to include multiple filter options like price range, availability, and ratings.
   - Add search functionality for easier product discovery.

3. **UI/UX Improvements**:

   - Add a theme mode toggle for better user accessibility.

4. **State Management Scalability**:

   - Transition to Redux Toolkit if the application grows in complexity and requires advanced state management features like middleware or complex state interactions.

5. **Testing**:
   - Add unit and integration tests using tools like Jest and React Testing Library.
   - Ensure the application is fully covered by end-to-end tests using Cypress.
