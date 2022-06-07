import useAxios from "./hooks/useAxios";

// let postUrl = "http://localhost:3500/posts";
let postUrl = "https://mola-items-api.herokuapp.com/items";
// let usersUrl = "http://localhost:3500/users";

function App() {
  const { data, errMsg, isLoading } = useAxios(postUrl);
  // const {
  //   data: dataUsers,
  //   errMsg: errMsgUsers,
  //   isLoading: isLoadingUsers,
  // } = useAxios(usersUrl);

  return (
    <section style={{ display: "flex", justifyContent: "space-around" }}>
      <article>
        {errMsg && <p>Error - {errMsg}</p>}
        {!errMsg && isLoading && <p>Cargando..</p>}
        {!errMsg && !isLoading && data.length > 0 && (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </article>
      {/* <article>
        {errMsgUsers && <p>Error - {errMsgUsers}</p>}
        {!errMsgUsers && isLoadingUsers && <p>Cargando..</p>}
        {!errMsgUsers && !isLoadingUsers && dataUsers.length > 0 && (
          <ul>
            {dataUsers.map((user) => (
              <li key={user.id}>
                <h3>{user.title}</h3>
                <img src={user.img} alt={user.title} />
              </li>
            ))}
          </ul>
        )}
      </article> */}
    </section>
  );
}

export default App;
