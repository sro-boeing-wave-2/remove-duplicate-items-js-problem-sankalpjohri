/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */

const removeDuplicateItems = items => Array.from(new Set(items).values());

module.exports = removeDuplicateItems;
