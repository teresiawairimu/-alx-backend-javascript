import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const objectArray = [];
  sizes.forEach((size) => {
    const obj = new ClassRoom(size, null);
    objectArray.push(obj);
  });
  return objectArray;
}
