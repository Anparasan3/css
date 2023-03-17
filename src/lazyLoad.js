import { lazy } from "react";
import { sleep } from "./utils/helpers";

export function lazyLoad(path, namedExport) {
  return lazy(() => {
    const promise = sleep(100).then(() => import(`${path}`));
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}
