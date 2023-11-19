export const formatDate = (timeStamp) => {
  const strDateArr = new Date(timeStamp).toString().split(" ");
  return strDateArr[1] + " " + strDateArr[2];
};

export const addKMB = (amount) => {
  if (!amount) return amount;

  if (Math.floor(amount) !== Math.ceil(amount)) {
    const pointArr = amount.toString().split(".");
    return pointArr[0] + "." + pointArr[1][0];
  }
  const numberOfDigits = Math.ceil(Math.log10(amount));
  let retValue = "0 M";
  if (amount <= 999) {
    retValue = amount;
  } else if (numberOfDigits >= 3 && numberOfDigits <= 6) {
    retValue = `${(amount / 1000).toFixed(1)}`;
    if (retValue[retValue.length - 1] === "0") {
      retValue = retValue.split(".")[0];
    }
    retValue += "K";
  } else if (numberOfDigits >= 7 && numberOfDigits <= 9) {
    retValue = `${(amount / 1000000).toFixed(1)}`;
    if (retValue[retValue.length - 1] === "0") {
      retValue = retValue.split(".")[0];
    }
    retValue += "M";
  } else if (numberOfDigits > 9) {
    retValue = `${(amount / 100000000).toFixed(1)}`;
    if (retValue[retValue.length - 1] === "0") {
      retValue = retValue.split(".")[0];
    }
    retValue += "B";
  }
  return retValue;
};

export const numberWithCommas = (number) => {
  if (!number) {
    return number;
  }
  number = number.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(number)) number = number.replace(pattern, "$1,$2");
  return number;
};

export const getDaysBefore = (time) => {
  return Math.round(
    (new Date(time).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
};
