import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
        info: null
    };

    componentDidCatch(error, info) {
        this.setState({
            error,
            info
        });
    }

    render() {
        const { error, info } = this.state;

        if (error) {
            return (
                <div>
                    <h2>Something went wrong...</h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {error.toString()}
                        <br />
                        {info.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;