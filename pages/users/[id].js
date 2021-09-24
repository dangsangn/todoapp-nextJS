import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const DetailUser = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const getDetailUser = async () => {
      try {
        if (router.query.id) {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + router.query.id
          );
          const data = await response.json();
          setUser({ ...data });
        }
      } catch (error) {}
    };
    getDetailUser();
  }, []);
  return (
    <>
      <Head>
        <title>TodoApp | Detail User</title>
        <meta name="keywords" content="todoapp" />
      </Head>
      <div>
        <h1>Detail User</h1>
        <p>Name: {user?.name}</p>
        <p>
          Address: {user?.address?.street}, {user?.address?.city}
        </p>
        <p>Phone: {user?.phone}</p>
      </div>
    </>
  );
};

export default DetailUser;
