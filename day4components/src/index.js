import React from "react";
import ReactDOM from "react-dom";
const random = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contenteditable="true" spellcheck="true">
      My Favourite Foods
    </h1>
    <div>
      <img src={random} />
      <img
        className="img"
        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className="img"
        src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <img
        className="img"
        src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=360&t=st=1713436730~exp=1713437330~hmac=9b2a9139ee16d00fa91d630dcdfcbfe2ecb054649c7f821619472c03ada46f49"
        alt=""
      />
    </div>
  </div>,
  document.getElementById("root")
);
