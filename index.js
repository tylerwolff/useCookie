import { useState } from "react";

function setCookie(cname, cvalue, options) {
  var d = new Date();
  d.setTime(d.getTime() + options.days * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + cvalue + ";" + expires + ";path=" + options.path;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default function(key, initialValue) {
  const [item, setItem] = useState(() => {
    return getCookie(key) || initialValue;
  });

  const updateItem = (value, options = { days: 7, path: "/" }) => {
    setItem(value);
    setCookie(key, value, options);
  };

  return [item, updateItem];
}
