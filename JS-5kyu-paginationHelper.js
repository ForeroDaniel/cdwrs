class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // Returns the total number of pages
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  // Returns the total number of items
  itemCount() {
    return this.collection.length;
  }

  // Returns the number of items on the given page
  pageItemCount(pageIndex) {
    const totalPages = this.pageCount();
    
    // If the page index is out of range, return -1
    if (pageIndex < 0 || pageIndex >= totalPages) {
      return -1;
    }

    // Determine the start and end index of the page
    const startIndex = pageIndex * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.collection.length);

    return endIndex - startIndex;
  }

  // Given an item index, returns the page it belongs to
  pageIndex(itemIndex) {
    // If the item index is out of range, return -1
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
