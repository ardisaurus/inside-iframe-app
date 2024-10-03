import CookiesTest from "../../components/CookiesTest";
import useStoragePermission from "./useStoragePermission";

export default function Home() {
  const { askForPermission, needPermission, haveCheckedPermission } =
    useStoragePermission();

  return (
    <div>
      <div className="element">
        <h2 style={{ color: "red", fontSize: "1.2em" }}>
          New testing (updated)
        </h2>
        <p>needPermission : {needPermission ? "true" : "false"}</p>
        <p>
          haveCheckedPermission : {haveCheckedPermission ? "true" : "false"}
        </p>

        <ol>
          <li>click `Test Cookie and Close Tab` in this new tab.</li>
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
      <CookiesTest />
    </div>
  );
}
