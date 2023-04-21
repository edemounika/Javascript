export function filterData(searchText, reastarants) {
    const filterData = reastarants.filter((reastarant) =>
      reastarant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }