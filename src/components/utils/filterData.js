// Gives flexibility to reuse the code in different components

const filterData = (restaurants, searchText) => {
    return restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
}

export default filterData;