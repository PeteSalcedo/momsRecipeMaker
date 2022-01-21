class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2,
    };
    this.pageFlip = this.pageFlip.bind(this);
    this.pageRender = this.pageRender.bind(this);
    // this.loadFile = this.loadFile.bind(this);
  }

  // loadFile (event) {
  //     var image = document.getElementById("output");
  //     image.src = URL.createObjectURL(event.target.files[0]);
  //   };

  pageFlip() {
    //we need to build a get request here and when it responds we need to update the page
    //given that the key form is using default browser action

    console.log(this.props);
  }
  pageRender() {
    switch (this.state.page) {
      case 0:
        return <KeyForm pageFlip={this.pageFlip} />;
      case 1:
        return <BasicInfoForm />;
      case 2:
        return <PersonaForm />;

      default:
        break;
    }
  }
  render() {
    return <div className="App">{this.pageRender()}</div>;
  }
}

var KeyForm = function (props) {
  return (
    <div>
      <form action="/validate" method="GET">
        <label for="key">Llave:</label>
        <br />
        <input type="text" id="key" name="key" />
        <br />
        <br />
        <input type="submit" value="Entra" />
      </form>
    </div>
  );
};
var BasicInfoForm = function () {
  return (
    <div>
      <form action="/basicInfo" method="POST">
        <label for="name">Nombre:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label for="phone">Telefono:</label>
        <br />
        <input type="text" id="phone" name="phone" />
        <br />
        <br />
        <input type="submit" value="Entra" />
      </form>
    </div>
  );
};
var PersonaForm = function () {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server

    // ...
  }
  return (
    <div>
      <form action="/persona" method="POST">
        <input type="file" onChange={handleUpload} />
        <br />
        <label for="color">Color:</label>
        <br />
        <input type="text" id="color" name="color" />
        <br />
        <label for="animal">Animal:</label>
        <br />
        <input type="text" id="animal" name="animal" />
        <br />
        <label for="sex">Sex:</label>
        <br />
        <input type="text" id="sex" name="sex" />
        <br />
        <br />
        <input type="submit" value="Entra" />
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
