// The intermediary step that allows the dynamic creation of UML's. Intermediary between user input and mermaid.js
// generateMermaid.js

// Converts Gemini-generated metadata JSON into Mermaid.js syntax

function metadataToMermaid(metadata) {
    const { METADATAOBJECT, METADATAEVENT } = metadata;
  
    const objectLabel = Object.entries(METADATAOBJECT)
      .map(([key, value]) => `${key}: ${value}`)
      .join("<br/>");
  
    const eventLabel = Object.entries(METADATAEVENT)
      .map(([key, value]) => `${key}: ${value}`)
      .join("<br/>");
  
    const mermaidDefinition = `
      graph LR;
      METADATAOBJECT["${objectLabel}"] -->|triggers| METADATAEVENT["${eventLabel}"];
    `;
  
    return mermaidDefinition.trim();
  }
  
  module.exports = { metadataToMermaid };
  
  
  // Example Usage:
  
  // Simulated Gemini metadata output
  const exampleMetadata = {
    METADATAOBJECT: {
      id: "BtnLogin",
      type: "3DButton",
      color: "neon-blue",
      label: "Authenticate User"
    },
    METADATAEVENT: {
      id: "EvtLogin",
      description: "Triggers user authentication flow",
      action: "call_auth_api"
    }
  };
  
  const mermaidOutput = metadataToMermaid(exampleMetadata);
  
  console.log(mermaidDefinition);
  