const { StudentInformation } = require("./src/models");
const { sequelize } = require("./src/models");
sequelize
  .sync({ force: true })
  .then(() => {
    return StudentInformation.bulkCreate([
      {
        id: 1,
        name: "Mew",
        age: "24",
        university: "TU",
      },
    ]);
  })

  .then(() => process.exit(0))
  .catch((err) => console.log(err.message));
