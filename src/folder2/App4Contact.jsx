import React from "react";
const styles = {
  underline: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
};

function App4Contact() {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <h1 className={"text-start mb-5"}>Contact</h1>
        <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
        <p style={{fontWeight: "bold", color: "#4682B4"}}>Catering Service, 42nd Living St, 43043 New York, NY</p>
        <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="name" placeholder="Name" style={styles.underline}/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="how-many-people" placeholder="How many people" style={styles.underline}/>
          <label htmlFor="HowManyPeople">How many people</label>
        </div>
        <div className="form-floating mb-3">
          <input type="date" className="form-control" id="date" placeholder="date" style={styles.underline}/>
          <label htmlFor="date"></label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="message" placeholder="message" style={styles.underline}/>
          <label htmlFor="message">Message / Special Requirements</label>
        </div>
      </div>
      <button className={"btn btn-secondary mt-3"} type={"button"}>SEND MESSAGE</button>
    </div>
  );
}

export default App4Contact;