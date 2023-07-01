module.exports = (sequelize, DataTypes) => {
  const studentInformation = sequelize.define(
    "studentInformation",
    {
      name: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.STRING,
      },
      university: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );

  return studentInformation;
};
