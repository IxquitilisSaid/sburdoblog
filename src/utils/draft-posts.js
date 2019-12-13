export default draftPosts;

function draftPosts(query) {
  const environment = process.env.NODE_ENV;

  return query[environment].edges;
}