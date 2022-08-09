import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
  const token = jwt.sign(
    {
      id: user?._id || "",
      name: user?.name || "",
    },
    "r=2%P%25TDMNBaC6"
  );

  return token;
};
