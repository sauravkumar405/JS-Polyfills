Object.prototype.myAssign = (target, ...source) => {
  source.map((s) => {
    if (s === undefined || s === null) {
      return;
    }
    Object.keys(s).map((k) => {
      if (typeof s[k] === "object" && target[k]) {
        target[k] = s[k];
      } else if (typeof s[k] !== "object" && !target[k]) {
        target[k] = s[k];
      }
    });
  });

  return target;
};
