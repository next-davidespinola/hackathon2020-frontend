const imagesMap = {
  1: 'assets/images/avatars/1.svg',
  2: 'assets/images/avatars/2.svg',
  3: 'assets/images/avatars/3.svg',
  4: 'assets/images/avatars/4.svg'
};

const petImagesMap = {
  1: 'assets/images/shop/bee.svg',
  2: 'assets/images/shop/fish.svg',
  3: 'assets/images/shop/frog.svg',
  4: 'assets/images/shop/rabbit.svg',
  5: 'assets/images/shop/dog.svg',
  6: 'assets/images/shop/cat.svg',
};

export function getUserAvatar(id) {
  return imagesMap[id];
}

export function getPetAvatar(inventory) {
  const usedItem = inventory.find((item) => {
    return item.used;
  })
  return usedItem ? petImagesMap[usedItem.id] : 1;
}
