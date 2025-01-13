export default {
  build: {
    command: "npm install && npm run build",
    environment: {
      NODE_VERSION: "18",
      SKIP_BUN_INSTALL: "true"
    }
  }
}