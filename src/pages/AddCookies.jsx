import { useState } from "react";
import useStoragePermission from "./Home/useStoragePermission";
import CookiesTest from "../components/CookiesTest";

export default function SafariPermission() {
  const [isError, setisError] = useState(false);
  const handleButtonClick = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    var CookieItem = "foo";
    document.cookie =
      "CookieItem=foo;samesite=None; secure; max-age=3153600000";
    if (document.cookie.indexOf(CookieItem) == -1) {
      setisError(true);
    } else {
      window.close();
    }
  };

  const { askForPermission, needPermission, haveCheckedPermission } =
    useStoragePermission();

  return (
    <div>
      <h1>Click button bellow</h1>
      <p style={{ color: "red" }}>{isError ? "Unable to set cookie" : null}</p>
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleButtonClick}
      >
        Test Cookie and Close Tab
      </button>

      <p>needPermission : {needPermission ? "false" : "true"}</p>
      <p>haveCheckedPermission : {haveCheckedPermission ? "false" : "true"}</p>
      <button
        type="button"
        onClick={() => askForPermission()}
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
      >
        click here
      </button>
      <CookiesTest />
    </div>
  );
}
