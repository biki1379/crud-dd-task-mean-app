module.exports = {
  // Use Docker env variable if present, otherwise fall back for local dev
  url: process.env.MONGO_URL || "mongodb://localhost:27017/dd_db"
};
