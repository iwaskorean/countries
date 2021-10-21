export function getItems(obj?: Object) {
  return obj ? Object.values(obj).join(', ') : '-';
}
