/*
 Assignment:
1. Create a FavoriteColors component that accepts an array of colors as a prop.
2. Loop through the array using `.map()` and display each color in a list.
3. Pass at least 3 colors from App.jsx.
*/

function FavoritColors(props) {
  return (
    <ul>
      {props.colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
}

export default FavoritColors;
