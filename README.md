# Driving School Web Application

A modern web application for managing driving school operations, built with React and TypeScript. The application provides a comprehensive platform for driving schools to manage their operations, students, and fleet.

## 🚀 Features

- **Online Booking System**: Easy-to-use interface for scheduling driving lessons
- **Fleet Management**: Track and manage your vehicle fleet
- **Student Progress Tracking**: Monitor student progress and performance
- **QR Code Sharing**: Quick sharing of important information
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Secure Authentication**: Protected routes and user authentication
- **Blog Section**: Share updates and driving tips
- **Theory Class Management**: Schedule and manage theory classes

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context
- **Authentication**: Supabase
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

## 🏗️ Project Structure

```
driving-school/
├── src/
│   ├── components/     # React components
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom hooks
│   ├── services/      # API services
│   ├── utils/         # Utility functions
│   └── __tests__/     # Test files
├── public/            # Static assets
└── ...configuration files
```

## 🚦 Getting Started

1. **Prerequisites**
   - Node.js (v14 or higher)
   - npm or yarn

2. **Installation**
   ```bash
   git clone https://github.com/your-username/driving-school.git
   cd driving-school
   npm install
   ```

3. **Environment Setup**
   - Copy `env.example` to `.env`
   - Fill in your Supabase credentials

4. **Development**
   ```bash
   npm start         # Start development server
   npm test         # Run tests
   npm run build    # Build for production
   ```

## 🌿 Branch Structure

- `main`: Production-ready code
- `development`: Active development branch
- Feature branches: `feature/feature-name`

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Write tests for new features
- Use Prettier for code formatting

## 🔒 Security

- Environment variables are managed in Vercel
- Protected branches require review
- Sensitive data is never committed to the repository

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email support@drivingschool.com or open an issue in the repository.

---

## Development Workflow

1. Create feature branches from `development`
2. Make changes and test thoroughly
3. Submit pull request to `development`
4. After review and testing, merge to `development`
5. When ready for production, merge `development` to `main`

## Branch Protection

Both branches are protected with the following rules:
- Requires pull request reviews (1 reviewer)
- Prevents force pushes
- Requires conversation resolution
- Dismisses stale reviews on new changes
- Requires latest push approval (main branch)
- Maintains clean commit history

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
