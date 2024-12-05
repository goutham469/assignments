import React from 'react'

function Python() {
  return (
    <div>
        <h3>Python</h3>
        <p className='TechnologiesChildText'>
                    What is Python?
            Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.

            It is used for:

            web development (server-side),
            software development,
            mathematics,
            system scripting.
            What can Python do?
            Python can be used on a server to create web applications.
            Python can be used alongside software to create workflows.
            Python can connect to database systems. It can also read and modify files.
            Python can be used to handle big data and perform complex mathematics.
            Python can be used for rapid prototyping, or for production-ready software development.
            Why Python?
            Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
            Python has a simple syntax similar to the English language.
            Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
            Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
            Python can be treated in a procedural way, an object-oriented way or a functional way.
            Good to know
            The most recent major version of Python is Python 3, which we shall be using in this tutorial. However, Python 2, although not being updated with anything other than security updates, is still quite popular.
            In this tutorial Python will be written in a text editor. It is possible to write Python in an Integrated Development Environment, such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful when managing larger collections of Python files.
            Python Syntax compared to other programming languages
            Python was designed for readability, and has some similarities to the English language with influence from mathematics.
            Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
            Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly-brackets for this purpose.
        </p>
        <img className='TechnologiesChildImages' src='data:image/jpeg;base64,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'></img>
        <img className='TechnologiesChildImages' src='https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png'></img>
        <img className='TechnologiesChildImages' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLk0jLzTMvd2GfwVZp22BNeUWUsRQJdjWtDQ&usqp=CAU'></img>
    </div>
  )
}

export default Python