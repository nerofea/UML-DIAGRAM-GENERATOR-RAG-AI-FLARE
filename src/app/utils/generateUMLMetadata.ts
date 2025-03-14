// generateMetadata.ts

// Turns user input and Gemini response into structured JSON metadata

interface MetadataObject {
    id: string;
    type: string;
    color?: string;
    label?: string;
    [key: string]: string | undefined;
  }
  
  interface MetadataEvent {
    id: string;
    description: string;
    action?: string;
    [key: string]: string | undefined;
  }
  
  interface Metadata {
    METADATAOBJECT: MetadataObject;
    METADATAEVENT: MetadataEvent;
  }
  
  export function createMetadata(userInput: Partial<MetadataObject>, geminiNarrative: Partial<MetadataEvent>): Metadata {
    const metadataObject: MetadataObject = {
      id: userInput.id || "default_id",
      type: userInput.type || "default_type",
      color: userInput.color,
      label: userInput.label,
      ...userInput
    };
  
    const metadataEvent: MetadataEvent = {
      id: geminiNarrative.id || "default_event_id",
      description: geminiNarrative.description || "default_description",
      action: geminiNarrative.action,
      ...geminiNarrative
    };
  
    return {
      METADATAOBJECT: metadataObject,
      METADATAEVENT: metadataEvent
    };
  }
  
  // Example Usage:
  
  const userInputExample = {
    id: "BtnSubmit",
    type: "UIButton",
    color: "red",
    label: "Submit Form"
  };
  
  const geminiNarrativeExample = {
    id: "EvtFormSubmit",
    description: "Submits the user form to the backend",
    action: "submit_form_api"
  };
  
  const generatedMetadata = createMetadata(userInputExample, geminiNarrativeExample);
  
  console.log(JSON.stringify(generatedMetadata, null, 2));
  