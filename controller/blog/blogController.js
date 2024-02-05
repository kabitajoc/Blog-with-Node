const { blogs } = require("../../model");

exports.renderHome = async (req, res) => {
  // blogs table bata row nikalnu paryo ani home page lai pass garnu paryo
  const blogsTableblogs = await blogs.findAll();
  res.render("home", { blogs: blogsTableblogs });
};

exports.renderAddBlog = (req, res) => {
  res.render("addblog");
};

exports.addBlog = async (req, res) => {
  console.log(req.file);

  const { title, subTitle, description } = req.body;
  if (!title || !subTitle || !description) {
    return res.send("Please provide title,subTitle and description");
  }
  //inserting in tables
  await blogs.create({
    title: title,
    subTitle: subTitle,
    description: description,
    image: process.env.backendUrl + req.file.filename,
  });
  res.redirect("/");
};

exports.renderSingleblog = async (req, res) => {
  const id = req.params.id;
  const foundData = await blogs.findByPk(id);

  res.render("singleBlog", { blog: foundData });
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/");
};

exports.renderUpdateBlog = async (req, res) => {
  const id = req.params.id;
  const blog = await blogs.findByPk(id);

  res.render("updateBlog", { id: id, blog: blog });
};
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, subTitle, description } = req.body;
  await blogs.update(
    {
      title: title,
      subTitle: subTitle,
      description: description,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.redirect("/blog/" + id);
};



exports.render;
