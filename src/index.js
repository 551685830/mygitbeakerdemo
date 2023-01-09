// const { Gitlab } = require("@gitbeaker/node");
// // const { ProjectsBundle } = require("gitlab");

// const api = new Gitlab({
//   token: "5yYfGpz3iwnKzqQMZn3u"
// });

// const getUsers = async () => {
//   let users = await api.Users.all();
//   users
//     .then(data => console.log("users", data))
//     .catch(e => console.table(e.message));
// };

// // console.log();
// getUsers();
const { ProjectsBundle } = require("gitlab");

const services = new ProjectsBundle({
  token: "4324321432143214312",
  host: "https://git.git.com/"
});

services.Projects.all().then((data) => {
  console.log("dfdfn =>", data);
});
