import Form from "../schema/formSchema.js";

function generateRandom() {
  var second = new Date().toLocaleTimeString("en-UK", { second: "numeric" });
  let random = Math.random();
  random = Math.floor(random * 100000);
  if (second === 0) {
    second = 61;
  }
  return random * second;
}

export const addUser = async (req, res) => {
  const form = req.body;
  form._id = generateRandom();
  form.lastUpdate = new Date();
  const newForm = new Form(form);

  try {
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const Forms = await Form.find({}).sort({lastUpdate: -1});
    response.status(200).json(Forms);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getOneUser = async (request, response) => {
  try {
    const form = await Form.find({ _id: request.params.id });
    response.status(200).json(form);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const updateUser = async (request, response) => {
  let form = request.body;
  form.lastUpdate = new Date();
  const editForm = new Form(form);

  try {
    const form = await Form.updateOne({ _id: request.params.id }, editForm);
    response.status(201).json(editForm);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await Form.deleteOne({ _id: request.params.id });
    response.status(201).json(deleteForm);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};