/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  let i = 0;
  const itemMap = new Map();
  const processedArray = [];
  for (i = 0; i < items.length; i += 1) {
    if (!itemMap.has(items[i])) {
      itemMap.set(items[i], 1);
      processedArray.push(items[i]);
    }
  }
  return processedArray;
};

module.exports = removeDuplicateItems;
