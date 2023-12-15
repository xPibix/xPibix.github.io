import { useLazyGetUsersQuery } from "../../store/api/api";
import { useEffect, useState } from "react";
import "./UsersGet.scss";
import Button from "../UIElements/Buttons/Button";
import Loader from "../UIElements/Loader/Loader";
import UserCard from "./UserCard/UserCard";
import { useActions } from "../../hooks/actions";
import { useSelector } from "react-redux";

const UsersGet = () => {
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [fetchUsers, { data, isLoading, isError, error }] =
    useLazyGetUsersQuery();
  const { addUsers, resetUsers, nextPage } = useActions();
  const { users, page } = useSelector((state) => state.users);

  useEffect(() => {
    return () => resetUsers();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      await fetchUsers(page).unwrap();
    };

    loadUsers();
    setIsMoreLoading(true);
  }, [page]);

  useEffect(() => {
    data?.users && addUsers(data?.users);

    setIsMoreLoading(false);
  }, [data]);

  return (
    <section className="usersGet" id="users">
      <h1 className="title">Working with GET request</h1>
      <ul className="users">
        {users && users.map((user) => <UserCard key={user.id} {...user} />)}
      </ul>

      {isError && (
        <p className="error">
          Error while loading users: {error.status} {error.originalStatus}
        </p>
      )}
      {isLoading && <Loader />}

      {!isMoreLoading ? (
        <Button
          text={"Show more"}
          showMore={nextPage}
          isDisabled={data?.total_pages === page}
        />
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default UsersGet;
