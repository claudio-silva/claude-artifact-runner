FROM node:23.11.0-alpine

# Install git (required by run-claude-artifact to clone the template)
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Clear npm cache and install the run-claude-artifact package globally
# Using --force ensures we get the latest version even if cached
RUN npm cache clean --force && \
    npm install -g run-claude-artifact@latest --force

# Create entrypoint script that forwards arguments to npx
RUN echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'exec npx run-claude-artifact --no-open --public "$@"' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]

# Default command (can be overridden)
CMD ["--help"]

