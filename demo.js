window.Logs = function Logs() {
  console.count("Counting numbers");
  console.time("Render time");
  console.log(
    `Console %cformatting https://example.com/linkified`,
    "color: red"
  );

  console.log(
    "Functions",
    function a() {
      console.log(1);
    },
    [function myFunc() {}]
  );

  console.table([1, 2, 3]);

  console.log(
    1,
    2,
    "Mixed types",
    { an: "object" },
    [[[["Recursive types", new Promise(() => {})]]]],
    "https://t.com"
  );
  console.log("Promise object", new Promise(() => {}));
  console.log("Funky numbers", 2.998e88, Infinity, -Infinity, NaN, -0, {
    a: -0,
  });

  console.log("HTML element", document.body);

  console.log("Nested", {
    promise: new Promise(() => {}),
    html: document.body,
  });

  console.log("Falsey types", false, "", 0, null, undefined);
  console.warn("This is a warning", "message");
  console.info("This is an info", "message");
  console.debug("This is a debug", "message");
  for (let i = 0; i < 30; i++) {
    console.log("grouped logs");
  }

  try {
    nonExistentFunc();
  } catch (e) {
    console.error(e);
  }
  console.timeEnd("Render time");
};
