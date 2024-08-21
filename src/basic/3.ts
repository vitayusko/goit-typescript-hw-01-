// union

function formatInput(input: string | number) {
  if (typeof input === "number") {
    return input.toFixed(2);
  } else {
    return input.toUpperCase();
  }
}

// literal

function type(type: "enable" | "disable") {
  if (type === "enable") {
    console.log("enable");
  } else if (type === "disable") {
    console.log("disable");
  }
}
