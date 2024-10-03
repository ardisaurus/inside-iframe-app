import { useEffect } from "react";

var CookieName = "TestCookie";

export default function CookiesTest() {
  useEffect(() => {
    document.cookie = "CookieName=TestCookie;samesite=None; secure";
  }, []);

  const handleButtonClick = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    document.cookie =
      "CookieItem=fool;samesite=None; secure; max-age=3153600000";
  };
  const handleButton2Click = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    document.cookie =
      "your=cookie; Domain=https://phenomenal-lollipop-87c933.netlify.app/; Path=/; Expires=Thu, 22 Dec 2027 04:17:44 GMT; HttpOnly; Secure; SameSite=Lax";
  };

  return (
    <div>
      A cookie : {document.cookie.indexOf(CookieName) == -1 ? "no" : "yes"}
      <div>
        <p>B cookie : {document.cookie.indexOf("fool") == -1 ? "no" : "yes"}</p>
        <button
          type="button"
          onClick={() => handleButtonClick()}
          className="btn yellow continue btn-yellow-hover"
          style={{ padding: ".4em", margin: ".2em" }}
        >
          set B Cookie
        </button>
      </div>
      <div>
        <p>
          C cookie : {document.cookie.indexOf("cookie") == -1 ? "no" : "yes"}
        </p>
        <button
          type="button"
          onClick={() => handleButton2Click()}
          className="btn yellow continue btn-yellow-hover"
          style={{ padding: ".4em", margin: ".2em" }}
        >
          set C Cookie
        </button>
      </div>
    </div>
  );
}
