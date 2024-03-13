const themeToggle = (val, fun) => {
  fun((prev) => {
    return !prev;
  });
};

export default themeToggle;
