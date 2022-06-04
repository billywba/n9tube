/**
 * Renders a basic <ul> with a list of current viewer's usernames
 * @param {Object[]} viewerList - list of viewer objects, containing a 'username' property
 * @returns
 */
function ViewerList({ viewerList }) {
  return (
    <>
      <p className="text-white">Current Viewers</p>
      <ul>
        {viewerList.map((viewer, index) => (
          <li key={index} className="text-white">
            {viewer.username}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ViewerList;
