export default function BookList() {
  let pageTitle = "Bookie Books";
  let book1 =
    "https://mpd-biblio-covers.imgix.net/9781250337788.jpg?w=300dpr=1%201x,%20https://mpd-biblio-covers.imgix.net/9781250337788.jpg?w=300dpr=2%202x,%20https://mpd-biblio-covers.imgix.net/9781250337788.jpg?w=300dpr=3%203x";
  let book2 =
    "https://th.bing.com/th/id/R.fef17ebf23f08edecfc4e353aac50189?rik=Zst%2bzy%2fUQbwB9Q&pid=ImgRaw&r=0";
  let book3 =
    "https://th.bing.com/th/id/OIP.huY_lAEJikCU6JmCBDtUZAHaL2?w=186&h=298&c=7&r=0&o=5&dpr=1.3&pid=1.7";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img
        src={book1}
        alt="Beautiful Ugly by Alice Feeney"
        width="200"
        height="300"
      />
      <img
        src={book2}
        alt="Achtung Baby by Sara Zaske"
        width="200"
        height="300"
      />
      <img
        src={book3}
        alt="War and Peace by Leo Tolstoy"
        width="200"
        height="300"
      />
    </div>
  );
}
