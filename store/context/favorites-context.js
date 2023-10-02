import { Children, createContext, useState } from "react";
const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setfavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setfavoriteMealIds((currentfavIds) => [...currentfavIds, id]);
  }
  function removeFavorite(id) {
    setfavoriteMealIds((currentfavIds) =>
      currentfavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
