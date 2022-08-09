import jwt from "jsonwebtoken";

const secretToken = "r=2%P%25TDMNBaC6";

export const generateJWT = (user) => {
  const token = jwt.sign(
    {
      id: user?._id || "",
      name: user?.name || "",
    },
    secretToken
  );

  return token;
};

export const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(403).json({ mensaje: "token invalido" });

    const bearer = authorization.split(" ");
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, secretToken, (err, data) => {
      if (err) {
        return res.status(403).json({ mensaje: "token invalido" });
      } else {
        const { id } = jwt.decode(bearerToken);
        req.body.userId = id;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({ error: "SERVER_ERROR" });
  }
};
