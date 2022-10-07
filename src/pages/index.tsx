import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1 className="text-4xl">Loading......</h1>;
  }
  if (status === "authenticated") {
    return (
      <div className="flex items-center">
        <h1 className="text-4xl">Signed in as {session.user.email}</h1>
        <button
          className="bg-red-500 p-3  text-white rounded-md"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link href="/api/auth/signin">
      <a className="text-5xl">Sign in</a>
    </Link>
  );
}

export default index;
