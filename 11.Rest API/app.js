const express = require("express");
const app = express();

// middleware
app.use(express.json());

let data = null;

async function apiCall() {
  try {
    const response = await fetch(`https://dummyjson.com/recipes?limit=10`);
    if (response.ok) {
      const data = await response.json();
      return {
        message: "successful",
        data: data,
      };
    } else throw new Error("failed for api call");
  } catch (e) {
    return e.message;
  }
}

app.get("/", (req, res) => {
  res.json({
    message: "welcome to homepage",
  });
});

app.get("/get", (req, res) => {
  res.json(data);
});

app.get("/get/:id", (req, res) => {
  const param = parseInt(req.params.id);
  const singleProduct = data.filter((value) => value.id === param);
  res.json(singleProduct);
});

app.post("/add", (req, res) => {
  const newData = {
    id: data.length + 1,
    name: "my-name" + (data.length + 1),
  };
  data.push(newData);
  res.status(200).json({
    message: "added successfully",
  });
});

app.put("/update/:id", (req, res) => {
  const param = parseInt(req.params.id);

  const preData = data.findIndex((value) => param === value.id);
  if (preData >= 0) {
    data[preData].name = req.body.name || data[preData].name;
    res.status(200).json({
      message: "successfully updated",
    });
  } else {
    res.status(404).json({ message: "value not found" });
  }
});

app.delete("/delete/:id", (req, res) => {
  const param = parseInt(req.params.id);
  const preData = data.findIndex((value) => param === value.id);
  if (preData >= 0) {
    data.splice(preData, 1);
    res.status(200).json({
      message: "successfully deleted",
    });
  } else {
    res.status(404).json({ message: "value not found" });
  }
});

app.listen(8000, async () => {
  const response = await apiCall();
  data = response.data.recipes;

  console.log("Server is running");
});
