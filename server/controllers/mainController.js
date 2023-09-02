exports.homepage = async (req, res) => {
  const locals = {
    title: "NoteBox App",
    description: "Notes App made with Ejs MongoDB",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - NoteBox",
    description: "About page",
  };
  res.render("about", locals);
};
