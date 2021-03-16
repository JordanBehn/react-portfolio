import Note from '../../Assets/notetaker.png'

export default function Project(props) {
    console.log(props)
  return (
    <div>
      <h2>
        <a href={props.link}>{props.text}</a>
      </h2>
      <p></p>
      <img src={props.image} alt="placeholder" width="500"/>
    </div>
  );
}
