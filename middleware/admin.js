export default async function ({ store, route, redirect }) {
  // If the user is not authenticated

  if (store.state.auth.loggedIn && route.path === "/") {
    // redirect to the admin page
    return redirect("/partner");
  }

  // If the user is authenticated and has admin access
  //   return redirect("/admin");
}
