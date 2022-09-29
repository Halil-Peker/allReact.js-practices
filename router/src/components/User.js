import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>Details</h2>
      id:{id}
    </div>
  );
}

export default User;
