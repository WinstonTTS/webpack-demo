import $ from "jquery";
import another from "./another";

import "../css/styles.css";

$("#greetingButton").on("click", function() {
  another.sayHello();
  $(this).hide();
});

