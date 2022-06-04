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
