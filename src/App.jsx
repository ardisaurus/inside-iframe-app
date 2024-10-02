function App() {
  var CookieName = "TestCookie";
  document.cookie = "CookieName=TestCookie;samesite=None; secure";
  if (document.cookie.indexOf(CookieName) == -1) {
    return <div>Setted</div>;
  } else {
    return <div>Nooooo</div>;
  }
}

export default App;
