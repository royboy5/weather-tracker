"use strict";

const checkTimestamp = ts => {
  return ts.match(
    /\b[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z\b/
  );
};

export { checkTimestamp };
