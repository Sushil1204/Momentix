"use server";
import Login from "../(auth)/login/page.jsx";

// Server-Side Rendering for Authentication Check
export async function getServerSideProps(context) {
  const { req } = context;

  return {
    props: {},
  };
}

// Export the default component
export default Login;
