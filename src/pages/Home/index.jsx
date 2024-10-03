import { useEffect } from "react";
// import CookiesTest from "../../components/CookiesTest";
import useStoragePermission from "./useStoragePermission";

export default function Home() {
  const { askForPermission } = useStoragePermission();

  useEffect(() => {
    document.cookie =
      "onLoadCookie=main; max-age=3153600000; Secure; SameSite=Lax";
  }, []);

  const handleAddCookieButtonClick = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    document.cookie =
      "onClickCookie=main; max-age=3153600000; Secure; SameSite=Lax";
  };

  const handleAddCookieButtonClick2 = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    document.cookie =
      "set-cookie: your=cookie; Domain=phenomenal-lollipop-87c933.netlify.app; Path=/; Expires=Thu, 22 Dec 2027 04:17:44 GMT; Secure; SameSite=Lax";
  };

  return (
    <div>
      <div className="element">
        <h2 style={{ color: "red", fontSize: "1.2em" }}>
          cookies permission testing
        </h2>
        {/* <p>needPermission : {needPermission ? "true" : "false"}</p>
        <p>
          haveCheckedPermission : {haveCheckedPermission ? "true" : "false"}
        </p> */}

        <ol>
          <li>click `Add Cookie` close `Close Tab` in this new tab.</li>
          <a href="./add-cookies" target="_blank">
            click here
          </a>
          <li>Click this button and click allow permission</li>
          <button
            type="button"
            onClick={() => askForPermission()}
            className="btn yellow continue btn-yellow-hover"
            style={{ padding: ".4em", margin: ".2em" }}
          >
            click here
          </button>
          <li>Reload this page </li>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn yellow continue btn-yellow-hover"
            style={{ padding: ".4em", margin: ".2em" }}
          >
            click to Reload
          </button>
        </ol>
      </div>
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
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleAddCookieButtonClick2}
      >
        Add Cookie 2
      </button>
      {/* <CookiesTest /> */}
    </div>
  );
}
