export default function CookiesTest() {
  var CookieName = "TestCookie";
  document.cookie = "CookieName=TestCookie;samesite=None; secure";
  if (document.cookie.indexOf(CookieName) == -1) {
    return <div>no</div>;
  } else {
    return <div>yes</div>;
  }
}
