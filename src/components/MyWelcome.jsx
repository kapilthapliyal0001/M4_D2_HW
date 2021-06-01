import {Jumbotron, Button} from "react-bootstrap";

const MyWelcome = (prop) => (
  <h2 className="d-flex justify-content-center my-3">
    {/* here i didn't import bootstrap but still the 
      bootstrap classes are working fine ! */}
    <Jumbotron>
      <h1 className="d-flex justify-content-center">
        Strive Berlin Bookstore!
      </h1>
      <p className="my-3">
        Here are the availabe books categories, feel free to go through them.
      </p>
      <p className="d-flex justify-content-center mt-3">
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </h2>
  //   <div>
  //     <row className="justify-content-center mt-3">
  //       <col xs={12} md={6}>

  //       </col>
  //     </row>
  //   </div>
);

export default MyWelcome;
