export const chamarApi = (req, res, next) => {
    console.info("API sendo chamada...");
    return next();
};
