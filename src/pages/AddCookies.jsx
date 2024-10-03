import { useEffect, useState } from "react";
// import useStoragePermission from "./Home/useStoragePermission";
// import CookiesTest from "../components/CookiesTest";

export default function SafariPermission() {
  const [isError, setisError] = useState(false);

  useEffect(() => {
    document.cookie =
      "onLoadCookie=tab; samesite=Lax; secure; max-age=3153600000";
  }, []);
  const handleAddCookieButtonClick = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    var CookieItem = "tab";
    document.cookie =
      "onClickCookie=tab; samesite=Lax; secure; max-age=3153600000";
    localStorage.setItem("lastname", "Smith");
    if (document.cookie.indexOf(CookieItem) == -1) {
      setisError(true);
    }
  };
  const handleCloseButtonClick = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;

    window.close();
  };

  // const { askForPermission } = useStoragePermission();

  return (
    <div>
      <h1>Click button bellow</h1>
      <p style={{ color: "red" }}>{isError ? "Unable to set cookie" : null}</p>
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleCloseButtonClick}
      >
        Close Tab
      </button>
      {/* <p>needPermission : {needPermission ? "true" : "false"}</p>
      <p>haveCheckedPermission : {haveCheckedPermission ? "true" : "false"}</p> */}
      {/* <button
        type="button"
        onClick={() => askForPermission()}
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
      >
        click here for ask perm
      </button> */}
      {/* <CookiesTest /> */}
      <hr />
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleAddCookieButtonClick}
      >
        Add Cookie
      </button>
      <hr />
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
      >
        click to Reload
      </button>
    </div>
  );
}
