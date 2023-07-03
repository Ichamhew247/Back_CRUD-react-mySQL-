module.exports = (sequelize, DataTypes) => {
  const StudentInformation = sequelize.define(
    "StudentInformation",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      university: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
    }
  );

  return StudentInformation;
};
