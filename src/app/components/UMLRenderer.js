import mermaid from "mermaid";

document.addEventListener("DOMContentLoaded", async () => {
  // Example dynamic metadata
  const exampleMetadata = {
    METADATAOBJECT: {
      id: "BtnLogin",
      type: "3DButton",
      color: "neon-blue",
      label: "Authenticate User",
    },
    METADATAEVENT: {
      id: "EvtLogin",
      description: "Triggers user authentication flow",
      action: "call_auth_api",
    },
  };

  // Fetch the UML definition dynamically
  const response = await fetch("/generateUML");
  const { umlDefinition } = await response.json();

  // Inject the UML definition into the page
  document.getElementById("umlContainer").innerHTML = `
    <pre class="mermaid">${umlDefinition}</pre>
  `;

  // Initialize Mermaid
  mermaid.initialize({ startOnLoad: true });
  mermaid.init();
});
