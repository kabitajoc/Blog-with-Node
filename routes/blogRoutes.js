const {
  renderHome,
  renderAddBlog,
  addBlog,
  renderSingleblog,
  deleteBlog,
  renderUpdateBlog,
  updateBlog,
  renderRegister,
  register,
} = require("../controller/blog/blogController");
const { storage, multer } = require("../middleware/multerConfig");
const upload = multer({ storage: storage });

const router = require("express").Router();
router.route("/").get(renderHome);
router
  .route("/addblog")
  .get(renderAddBlog)
  .post(upload.single("image"), addBlog);
router.route("/blog/:id").get(renderSingleblog);
router.route("/delete/:id").get(deleteBlog);
router.route("/update/:id").get(renderUpdateBlog).post(updateBlog);
// router.route("/user").get(renderRegister);
// router.route("/register").get(renderRegister).post(register);

module.exports = router;
