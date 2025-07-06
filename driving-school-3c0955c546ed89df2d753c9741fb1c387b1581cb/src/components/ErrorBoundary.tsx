import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logComponentError } from '../utils/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error
    logComponentError('ErrorBoundary', error, {
      errorInfo,
      componentStack: errorInfo.componentStack,
    });

    // Update state with error info
    this.setState({
      error,
      errorInfo,
    });

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReportError = () => {
    if (this.state.error) {
      const errorReport = {
        message: this.state.error.message,
        stack: this.state.error.stack,
        componentStack: this.state.errorInfo?.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      };

      // Create a mailto link with the error report
      const subject = encodeURIComponent('Error Report - Zhwane Driving School');
      const body = encodeURIComponent(
        `Error Report:\n\n${JSON.stringify(errorReport, null, 2)}\n\nPlease describe what you were doing when this error occurred:`
      );
      
      window.location.href = `mailto:support@zhwanedrivingschool.com?subject=${subject}&body=${body}`;
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  Oops! Something went wrong
                </h2>
                
                <p className="text-sm text-gray-600 mb-6">
                  We apologize for the inconvenience. An unexpected error has occurred. 
                  Our team has been notified and we're working to fix it.
                </p>

                {process.env.NODE_ENV === 'development' && (
                  <div className="mb-6 p-4 bg-gray-100 rounded-md text-left">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Error Details (Development Mode):
                    </h3>
                    <pre className="text-xs text-gray-600 overflow-auto">
                      {this.state.error?.message}
                      {this.state.error?.stack && '\n\nStack:\n' + this.state.error.stack}
                    </pre>
                  </div>
                )}

                <div className="flex flex-col space-y-3">
                  <button
                    onClick={this.handleRetry}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                  >
                    Try Again
                  </button>
                  
                  <button
                    onClick={() => window.location.href = '/'}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                  >
                    Go to Home Page
                  </button>
                  
                  <button
                    onClick={this.handleReportError}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                  >
                    Report This Error
                  </button>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Error ID: {Date.now().toString(36)}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 