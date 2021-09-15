const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/api/comments/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/api/comments/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
