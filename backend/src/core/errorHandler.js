// This middleware intercepts all errors and sends a clean JSON response
// so the frontend Toast can display the exact message easily.
const errorHandler = (err, req, res, next) => {
    console.error(`[Error] ${err.message}`);
    
    // Default to 500 if no status code is set
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode).json({
        message: err.message || "An unexpected error occurred",
        // Only show stack trace in development
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorHandler };
