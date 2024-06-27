export const additionRepo = (num1: number, num2: number) => {
  try {
    return num1 + num2;
  } catch (error) {
    console.log(error);
    return "Internal server error";
  }
};

export const subRepo = (num1: number, num2: number) => {
  try {
    return num1 - num2;
  } catch (error) {
    console.log(error);
    return "Internal server error";
  }
};

export const proRepo = (num1: number, num2: number) => {
  try {
    return num1 * num2;
  } catch (error) {
    console.log(error);
    return "Internal server error";
  }
};

export const divRepo = (num1: number, num2: number) => {
  try {
    return num1 / num2;
  } catch (error) {
    console.log(error);
    return "Internal server error";
  }
};
