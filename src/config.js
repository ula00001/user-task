const config = (function () {
  switch (process.env.REACT_APP_CONFIG) {
    case "dev":
      return {
        CONTENT_BACKEND: "http://localhost:8090/api/exchange",
      };
    default:
      return {};
  }
})();

export const {
  CONTENT_BACKEND,
} = config;
