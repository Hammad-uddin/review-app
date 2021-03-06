import { Navigate, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
function Post() {
  const status = 200;
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>About</button>
      <Routes>
        <Route path="/show" element={<h1>Hello jee</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;
