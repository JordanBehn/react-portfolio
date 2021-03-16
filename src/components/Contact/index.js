// import { PinDropSharp } from '@material-ui/icons';
// import './JordanBehnResume.pdf'
export default function Contact(props) {
  return (
    <cardbody class="card-body">
      <h3 class="card-title">contact information:</h3>
      <p class="card-text">Jordan.Q.Behn@gmail.com</p>
      <p></p>
      <a href="https://github.com/JordanBehn ">Github </a>
      <a href="https://www.linkedin.com/in/jordan-behn-3a6ba3101/ ">
        Linkedin{" "}
      </a>
      <a href={props.resume} download="Resume">
      Résumé
      </a>
      <br></br>
    </cardbody>
  );
}
