import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import UsersGet from "./components/UsersGet/UsersGet";
import RegistrationForm from "./components/UsersPost/UsersPost";

function App() {
  return (
    <div className="container" id="main">
      <Nav />
      <Header />
      <UsersGet />
      <RegistrationForm />
    </div>
  );
}

export default App;
