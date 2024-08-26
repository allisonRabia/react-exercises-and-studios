export default function HobbyLinks() {
  let hobbyLinks = [
    "https://kirkwoodpubliclibrary.org/",
    "https://www.yarncomstl.com/",
  ];

  return (
    <div>
      <h3>My Hobbies</h3>
      <a href={hobbyLinks[0]} target="blank">
        Kirkwood PL
      </a>{" "}
      <br></br>
      <a href={hobbyLinks[1]} target="blank">
        Yarncom
      </a>
    </div>
  );
}
