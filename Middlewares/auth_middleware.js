const jwt = require('jsonwebtoken')



const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.token;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.json({ msg: "No Token Provided" });
      }

  const accessToken = authHeader.split(" ")[1];
      try {

         const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
         const { id, username } = decoded;
         req.user = { id, username };
         next();

      } catch (error) {
          res.json({ msg: error.message });
    }
  };




      module.exports = {
        authMiddleware
      }





