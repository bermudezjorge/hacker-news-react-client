export default function useLocalStorage(storageName) {
  const storage = JSON.parse(localStorage.getItem(storageName));

  const setStorage = (item) =>
    localStorage.setItem(storageName, JSON.stringify(item));

  return [storage, setStorage];
}
