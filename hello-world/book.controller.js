Book.create({
  title: "Clean Code",
  author: "Robert Cecil Martin",
  release_date: "2008-08-01",
  subject: 1
}).then(res => {
  console.log(res);
});

Book.findAll().then(res => {
  console.log(res);
});

Book.findOne({
  where: { id: 1 }
}).then(res => {
  console.log(res);
});

Book.destroy({
    where: {
        id: 2
    }
}).then(() => {
    console.log("Successfully deleted record.")
}).catch((error) => {
    console.error('Failed to delete record : ', error);
});