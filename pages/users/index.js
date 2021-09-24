import React, { useEffect, useState } from "react";
import styles from "../../styles/User.module.css";
import Link from "next/link";
import Head from "next/head";
const Users = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);
  return (
    <>
      <Head>
        <title>TodoApp | User</title>
        <meta name="keywords" content="todoapp" />
      </Head>

      <div>
        <h1>Todo List</h1>
        <ul>
          {userList.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link href={"/users/" + encodeURIComponent(item.id)}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
