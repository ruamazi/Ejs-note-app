exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs Notes",
    description: "Notes App made with Ejs MongoDB",
  };
  res.render("index", locals);
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description: "About page",
  };
  res.render("about", locals);
};
