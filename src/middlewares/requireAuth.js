const requireAuth = (req, res, next) => {
  try {
    if (req.isLoggedIn == false) {
      return res.status(401).json({ message: "No estas autenticado/a" });
    }else{
        next()
    }
  } catch (error) {
    console.error("Error en requireAuth:", error);
    res.status(500).json({ message: "Error interno en autenticación" });
  }
};

module.exports = { requireAuth }