const { DataTypes } = require("sequelize");
const sequelize = require("./server"); 

const Book = sequelize.define("books", {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  release_date: { type: DataTypes.DATEONLY },
  subject: { type: DataTypes.INTEGER }
});

sequelize.sync();

module.exports = Book;