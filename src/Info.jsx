// Info.jsx

import React from "react";

const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: "#aaa",
  },
};

function Info() {
  return (
    <div>
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div style={styles.fakeImg}>Fake Image</div>
      <p>아무 노래나 일단 틀어~~</p>
    </div>
  );
}

export default Info;