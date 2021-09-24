import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="notfound">
      <h1>Oppp... not found!</h1>
      <p>
        Do you come back:{" "}
        <Link href="/">
          <a>Home page</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
