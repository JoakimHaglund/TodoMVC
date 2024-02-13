
class NoteElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let shadow = this.attachShadow({ mode: "closed" });

    shadow.innerHTML = `
        <input type="checkbox">
        <p></p>
        `;
    let form = shadow.querySelector("form");
    form.onsubmit = async (event) => {
      event.preventDefault();

      let result = form.elements.input.value;
      console.log(result);
    };
  }
}
