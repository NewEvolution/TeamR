#Translation - TeamR

Represent a small bilingual lexicon as a Javascript object (see example below) and use it to translate a holiday card message from English into another language. Each member of the team will build a JavaScript module that will convert text entered into an input field to the language that they choose.

{"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}

This is Swedish, so please choose other languages. You can add as many words/translations as you wish so that the user can write more complex holiday cards.

1. One team member creates a Github project and adds the others as collaborators.

1. Each team member picks a language.

1. Your project should have one HTML file that has a textarea, a select element with an option for each language, a button with a label of "Translate", and an empty DOM element into which the translated text will be inserted.

1. The team must discuss and choose a single variable name that will hold all of the logic that the team creates (i.e. see the Sedan example above).

1. Each team member will create one JavaScript file that contains one IIFE. One teammate's IIFE will augment the other teammate's IIFE.

1. The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.

1. Each IIFE should expose, in its public interface, a method named translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's value should be the text entered in by the user.

1. The team should create a 3rd JavaScript file that handles interacting with the form elements and determining which method should be called.

###Requirements:
- Node.js https://nodejs.org/en/
- Installation of http-server via _npm install -g http-server_

###Post Cloning Your Fork Locally:
- Inside the main repo directory:
 - Run _http-server_
 - Make note of the port number returned after running _http-server_
- Navigate to http://localhost:[your-port-number]