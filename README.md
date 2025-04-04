# VAPI AI Assistant Implementation Guide

## Overview

This guide demonstrates how to implement the VAPI AI Assistant and customize its widget UI. The UI can be further improved depending on how you leverage the VAPI CDN. While you can download the VAPI CDN and copy the code to your project, it's important to note that using the CDN link directly may limit customization options for the design.

## VAPI CDN Folder Location

The VAPI CDN file is located at the following path:
```C:\Users\Production\Documents\Audree\ai-assistant\public\assets\static\assistant-cdn.js```

Make sure to use this local file in your project to ensure better control over the widget’s appearance and behavior.

## Example Implementation

To display the VAPI AI Assistant on your desired page, include the following snippet of code in the appropriate section of your HTML or JavaScript:

```javascript
const vapiInstanceRef = useRef(null);
const assistant = "d7eacab2-e657-4f29-9840-c6188501c3af"; 
const apiKey = "9d5b5375-1873-4504-9197-529af26ab5a5"; 
const buttonConfig = {
  position: "bottom-right", 
  offset: "10px", 
  width: "50px", 
  height: "50px", 
};

useEffect(() => {
  // Create script only once when the component mounts
  const script = document.createElement("script");
  script.src = "/assets/static/assistant-cdn.js";
  script.defer = true;
  script.async = true;

  script.onload = () => {
    if (window.vapiSDK && !vapiInstanceRef.current) {
      // Create instance only once and save it in the ref
      vapiInstanceRef.current = window.vapiSDK.run({
        apiKey,
        assistant,
        config: buttonConfig,
      });
    }
  };

  // Append the script tag to the body
  document.body.appendChild(script);

  // Cleanup the script tag when the component unmounts
  return () => {
    document.body.removeChild(script);
  };
}, []);
```

## Customization Tips

- **UI Customization**: You can adjust the look and feel of the VAPI widget by modifying the styles within the CDN code in your project. This allows you to fine-tune the design to better integrate the assistant into your website’s overall aesthetic and user experience.

- **Local Setup**: By using the local CDN, you gain more flexibility in customization compared to using a direct CDN link, which has limitations in terms of adjusting design elements.

## GitHub Repository

For the latest updates, additional configurations, and access to the source code, visit the official VAPI AI Assistant GitHub repository:

[GitHub Repository Link]([[https://github.com/your-username/vapi-ai-assistant](https://github.com/lloyd-2340/ai-assistant)](https://github.com/lloyd-2340/ai-assistant))

## Conclusion

By following the steps outlined above, you can successfully implement and customize the VAPI AI Assistant in your project. For further enhancements, refer to the VAPI documentation for additional configuration options.

