import "@exuanbo/file-icons-js/dist/css/file-icons.css";
import icons from "@exuanbo/file-icons-js/dist/js/file-icons";
import { useEffect, useState } from "react";
import classNames from "classnames";

function FileIcon({ name, className }) {
  const [klass, setKlass] = useState("");

  useEffect(() => {
    icons
      .getClass(name)
      .then((k) => setKlass(k))
      .catch(() => null);
  }, [name]);

  if (!klass) {
    return null;
  }

  return (
    <i
      role="img"
      aria-label={name}
      className={classNames(className, klass)}
    ></i>
  );
}

export default FileIcon;
