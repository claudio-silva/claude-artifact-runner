FROM node:23.11.0-alpine

# Install git (required by run-claude-artifact to clone the template)
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Install the run-claude-artifact package globally
RUN npm install -g run-claude-artifact@latest

# Create entrypoint script that forwards arguments to npx
RUN echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'exec npx run-claude-artifact --no-open "$@"' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]

# Default command (can be overridden)
CMD ["--help"]

