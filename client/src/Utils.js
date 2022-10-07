export const birthdayParser = (num) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let timestamp = Date.parse(num);

  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return date.toString();
};

export const dateParser = (num) => {
  let options = {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  let timestamp = Date.parse(num);

  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return date.toString();
};

export const upperCase = (str) => {
  return str.toUpperCase();
}

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}
