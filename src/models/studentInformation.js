module.exports = (sequelize, DataTypes) => {
  const StudentInformation = sequelize.define(
    "StudentInformation",
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
      timestamps: false,
    }
  );

  return StudentInformation;
};
