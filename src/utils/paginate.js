import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (items, pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
