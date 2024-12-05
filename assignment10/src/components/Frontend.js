import React from 'react'

function Frontend() {
  return (
    <div>
        <h3>front End</h3>
        <p className='TechnologiesChildText'>
                        HyperText Markup Language
            HyperText Markup Language (HTML) is the backbone of any website development process, without which a web page does not exist. Hypertext means that text has links, termed hyperlinks, embedded in it. When a user clicks on a word or a phrase that has a hyperlink, it will bring another web-page. A markup language indicates text can be turned into images, tables, links, and other representations. It is the HTML code that provides an overall framework of how the site will look. HTML was developed by Tim Berners-Lee. The latest version of HTML is called HTML5 and was published on October 28, 2014 by the W3C recommendation. This version contains new and efficient ways of handling elements such as video and audio files.

            Cascading Style Sheets (CSS)
            Cascading Style Sheets (CSS) controls the presentation aspect of the site and allows your site to have its own unique look. It does this by maintaining style sheets that sit on top of other style rules and are triggered based on other inputs, such as device screen size and resolution. The CSS can be added externally, internally, or embedded in the HTML tags.[6]

            JavaScript
            JavaScript is an event-based imperative programming language (as opposed to HTML's declarative language model) that is used to transform a static HTML page into a dynamic interface. JavaScript code can use the Document Object Model (DOM), provided by the HTML standard, to manipulate a web page in response to events, like user input.

            Using a technique called AJAX, JavaScript code can also actively retrieve content from the web (independent of the original HTML page retrieval), and also react to server-side events as well, adding a truly dynamic nature to the web page experience.

                        WebAssembly
            WebAssembly, supported by all the major browsers (i.e. from the major vendors Google, Apple, Mozilla and Microsoft), is the only alternative to JavaScript for running code in web browsers (without the help of plug-ins, such as Flash, Java or Silverlight; all being discontinued, as browsers are dropping plug-in support). Prior to its adoption, there was asm.js (a subset of JavaScript; and thus strictly works in all browsers), that's also used as a compiler target with efficient support in browsers such as Internet Explorer 11; and for such browsers that do not support WebAssembly directly, it can be compiled to asm.js and those browsers supported that way. Generally speaking programmers do not program in WebAssembly (or asm.js) directly, but use languages such as Rust, C or C++ or in theory any language, that compile to it.
        </p>
        <img className='TechnologiesChildImages' src='data:image/jpeg;base64,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'></img>
        <img className='TechnologiesChildImages' src='https://us.123rf.com/450wm/maxkabakov/maxkabakov1303/maxkabakov130300375/18552263-web-development-concept-computer-keyboard-with-gears-icon-and-word-web-technology-on-enter-button.jpg?ver=6'></img>
        <img className='TechnologiesChildImages' src='data:image/jpeg;base64,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'></img>
    </div>
  )
}

export default Frontend