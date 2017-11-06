const links = [
  {
    id: 1,
    url: "http://graphql.org/",
    description: "Who to become grahpql master"
  },
  {
    id: 2,
    url: "http://dev.apollodata.com",
    description: "awesome grahpql Client"
  }
];

module.exports = {
  Query: {
    allLinks: () => links
  }
};